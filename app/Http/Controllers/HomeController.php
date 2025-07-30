<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }


    public function create($page_id,$section_id){
            switch ($page_id) {
                case 1:
                    if($section_id==1){
                        return view("admin.pages.slider");
                    }

                    if($section_id==2){
                        
                    }

                    break;
               
                case 2:
                    # code...
                    break;
               case 3:
                    # code...
                    break;
                default:
                    # code...
                    break;
            }
    }


    public function session(){
        // if(session()->has('string')){

        //     return response()->json(['has'=>true,'msg'=>session('string')]);
        // }else{
        //    return response()->json(['has'=>false,'msg'=>null]);
        // }
        return response()->json(session()->all());
    }
}
