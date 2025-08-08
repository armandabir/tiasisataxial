@extends ("layouts.master-adminDashboard")

@section('title','اسلایدر')

@section('page','اسلایدر')
@section('content')

<section class="content">
    <div class="container">
        <div class="row">
            <form action="{{route('admin.pages.update',$page)}}" method="POST" enctype="multipart/form-data">
               @csrf

              

                <div class="form-group">
                    <label for="file">عکس</label>
                    <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file1" name="pic[]" value="">
                    <input type="file" class="form-control @error('pic') is-invqalid @enderror" id="file2" name="pic[]" value="">
                    <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file3" name="pic[]" value="">
                    <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file4" name="pic[]" value="">
                    @error('pic')
                        <strong class="invalid-feedback">
                            {{$message}}              
                        </strong>
                    @enderror

                </div>

                <div class="form-group w-50 mx-auto mt-4">
                    <input type="submit" class="btn btn-primary btn-block" name="submit" value="ثبت">
                </div>
            </form>

        </div>
    </div>

</section>

@if(session()->has('string'))

    @include('layouts/alert')
@endif

@endsection