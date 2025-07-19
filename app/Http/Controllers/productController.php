<?php

namespace App\Http\Controllers;

use App\Models\view;
use Illuminate\Http\Request;
use App\Models\category;
use App\Models\product;
use App\Models\tag;
use App\Self\Helper;
use App\Self\Alert;

class productController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $catTable= new category();
        $cats=$catTable->getcats(0);
        $tags=Tag::all();
       return view("admin.productAdd",compact(['cats','tags']));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request,['title'=>"required|min:3","content"=>"required|min:10","price"=>"required|numeric|min:4"],
        ['title.required'=>"این فیلد اجباری است",
        'title.min'=>"حداقل 3 کاراکتر",
        'content.required'=>'متن اجباری است',
        'content.min'=>"حداقل 10 کاراکتر",
        'price.required'=>'این فیلد اجباری است',
        'price.numeric'=>"مقدار، عددی باشد",
        'price.min'=>"حداقدل 4 رقم باشد"
            ]
        );

        $this->validate($request,["pic"=>"required|array|min:2","pic.*"=>"required|mimes:jpg,jpeg,png,tif"],[
            'pic.required'=>"عکس محصول اجباری است",
            'pic.*.mimes'=>"فرمت های مجاز:jpg,jpeg,png,tif",
            'pic.min'=>'حداقل 2 عکس انتخاب کنید'
        ]);

        
      $slug=Helper::sluggableCustomSlugMethod($request->title);

      $pics=[];
        foreach($request->file("pic") as $pic ){
            $filename=$pic->getClientOriginalName();
            $filename=rand(0,1000).$filename;
            $upload=$pic->storeAs("public/products",$filename);
            $pics[]=$filename;
        }


        $product=new product();
        $product->cat_id=$request->cat_id;
        $product->name=$request->title;
        $product->slug=$slug;
        $product->pic=json_encode($pics);
        $product->content=$request->content;
        $product->price=$request->price;

      if($upload){
        if($product->save()){
            $product->tags()->sync($request->tags,false);
            Alert::message("success","محصول با موفقیت ثبت شد","success")->show();
            return back();
        }else{
            Alert::message("error","محصول ثبت نشد","error")->show();
            return back();
        }
      }
    
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
        //
    }
}
