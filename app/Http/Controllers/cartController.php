<?php

namespace App\Http\Controllers;

use App\Models\order;
use App\Models\order_detail;
use App\Self\Alert;
use Illuminate\Http\Request;
use Laravel\Ui\Presets\React;
use Illuminate\Support\Facades\Auth;
use Kavenegar;
class cartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $card=session('card');
        $cardjson=json_encode($card);
        return view("card",compact(['card','cardjson']));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request,['qty'=>"required|numeric|min:0|max:750"],[
            "qty.required"=>'این فیلد الزامی است',
            'qty.numeric'=>'مقدار،عددی باشد ',
            'qty.min'=>'حداقل تعداد 250گرم باشد ',
            'qty.max'=>'حداکثر تعداد 750 باشد'
        ]);
        $qty=$request->qty /1000;

        if($qty<=0.1){
            $qty=$qty*1000;
        }

        session()->put("card.$request->product_id",["qty"=>$qty,"price"=>$request->product_price]);


        return back();
    }

    public function paycard($card){
        $toalPrice=0;
        $card=json_decode($card);
        session()->put("card",$card);
        foreach(session('card') as $key=>$item){
            $total=$item->qty*$item->price;
            session()->put("card.$key",['qty'=>$item->qty,'price'=>$item->price,'total'=>$total]);
            $toalPrice+=$total;
        }

        session()->put('pay.totalprice',$toalPrice);


        if(!Auth::user()){
            session()->put("inPayment",true);
            return redirect()->route('login');
        }
        
   
        

        $response = zarinpal()
        ->merchantId('f180cd05-8761-4f37-97be-70a5f9a3248c') // تعیین مرچنت کد در حین اجرا - اختیاری
        ->amount($toalPrice) // مبلغ تراکنش
        ->request()
        ->description('transaction info') // توضیحات تراکنش
        ->callbackUrl('http://localhost:8000/verification') // آدرس برگشت پس از پرداخت
        ->mobile('09123456789') // شماره موبایل مشتری - اختیاری
        ->email('name@domain.com') // ایمیل مشتری - اختیاری
        ->send();
    
    if (!$response->success()) {
        return $response->error()->message();
    }
    
    // ذخیره اطلاعات در دیتابیس
    // $response->authority();
    
    // هدایت مشتری به درگاه پرداخت
    return $response->redirect();
    }


    public function verification(){
        

        $authority = request()->query('Authority'); // دریافت کوئری استرینگ ارسال شده توسط زرین پال
        $status = request()->query('Status'); // دریافت کوئری استرینگ ارسال شده توسط زرین پال
        $response = zarinpal()
            ->merchantId('f180cd05-8761-4f37-97be-70a5f9a3248c') // تعیین مرچنت کد در حین اجرا - اختیاری
            ->amount(session('pay.totalprice'))
            ->verification()
            ->authority($authority)
            ->send();

        if (!$response->success()) {

            Alert::message("error",$response->error()->message(),"error")->show();
            return redirect()->route('card');
            
        }

        // دریافت هش شماره کارتی که مشتری برای پرداخت استفاده کرده است
        // $response->cardHash();

        // دریافت شماره کارتی که مشتری برای پرداخت استفاده کرده است (بصورت ماسک شده)
        // $response->cardPan();

        // پرداخت موفقیت آمیز بود
        // دریافت شماره پیگیری تراکنش و انجام امور مربوط به دیتابیس

        return redirect()->route('paymentStore',['refId'=>$response->referenceId(),'status'=>$status]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $card=session('card');
        $order=new order();

        $order->count=count($card);
        $order->price=session('pay.totalprice');
        $order->referenceId=$request->refId;
        $order->status=$request->status;
        $order->description=session('pay.desc');
        $order->user_id=Auth::user()->id;
        if($order->save()){
            foreach ($card as $key=>$item){
                  $order_detail=new order_detail();
                  $order_detail->order_id=$order->id;
                  $order_detail->product_id=$key;  
                  $order_detail->qty=$item['qty'];
                  $order_detail->price=$item['total'];
                  $order_detail->save();
            }

           
            return $this->sendSms(Auth::user()->phone_number,$order->id,$item['total']);
        }else{
            Alert::message("error","سفارش ثبت نشد","error")->show();
        
        }
    }


    public function sendSms($number,$orderId,$price){
            try{
                $sender = "1000689696";		//This is the Sender number
            
                $message = "سفارش شما با موفقیت ثبت شد 
                شماره سفارش : $orderId
                مبلغ: $price
                ";		//The body of SMS
            
                $receptor = array($number,"09113393966");			//Receptors numbers
            
                $result = Kavenegar::Send($sender,$receptor,$message);
                if($result){
                    foreach($result as $r){
                        echo "messageid = $r->messageid";
                        echo "message = $r->message";
                        echo "status = $r->status";
                        echo "statustext = $r->statustext";
                        echo "sender = $r->sender";
                        echo "receptor = $r->receptor";
                        echo "date = $r->date";
                        echo "cost = $r->cost";
                    }
                }
            }
            catch(\Kavenegar\Exceptions\ApiException $e){
                // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
                echo $e->errorMessage();
            }
            catch(\Kavenegar\Exceptions\HttpException $e){
                // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
                echo $e->errorMessage();
            }catch(\Exceptions $ex){
            // در صورت بروز خطایی دیگر
                echo $ex->getMessage();
            }
            Alert::message("success","سفارش با موفقیت ثبت شد","success")->show();
            return redirect()->route('card');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   

        session()->forget("card.$id");
        return back();
        
    }


    public function emptycard(){
        session()->flush();
        return back();
    }
}
