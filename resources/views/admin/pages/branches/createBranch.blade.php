@extends ("layouts.master-adminDashboard")

@section('title','افزودن نمایندگی')

@section('page','افزودن نمایندگی')
@section('content')

<section class="content">
    <div class="container">
        <div class="row">
            <form action="{{route('admin.pages.store',[$page_id,$sect_id])}}" method="POST" enctype="multipart/form-data">
               @csrf

                    <input type="text" name="sect_name" value="نمایندگی فروش" hidden>
                    

                    <div class="form-group">
                        <label for="title">عنوان</label>
                        <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror" value="{{old('title')}}">
                        @error('title')
                            <strong class="invalid-feedback">
                                {{$message}}
                            </strong>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="file">عکس</label>
                        <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file4" name="pic" value="">
                        @error('pic')
                            <strong class="invalid-feedback">
                                {{$message}}              
                            </strong>
                        @enderror

                    </div>


                <div class="form-group w-100 mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-12">
                             <input type="submit" class="btn btn-primary btn-block" name="submit" value="ثبت">
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>

</section>

@if(session()->has('string'))

    @include('layouts/alert')
@endif

@endsection