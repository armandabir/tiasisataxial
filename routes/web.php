<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    return view('index');
});

Route::get('/product/{id}', function () {
    $arman="test";
    $names=['ali','rahmat','ziba'];
    $result=[
        'r1'=>$names,
        'r2'=>$arman
    ];
    return view('index',['result'=>json_encode($result)]);
});
