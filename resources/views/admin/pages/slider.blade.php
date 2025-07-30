@extends ("admin.master-adminDashboard")

@section('title','اسلایدر')
@section('content')

<section class="content">
    <div class="container">
        <div class="row">
            <form action="" method="POST">
                   
                    <div class="form-group">
                        <label for="file">عکس</label>
                        <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file1" name="pic[]" value="{{old('pic')}}">
                        <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file2" name="pic[]" value="{{old('pic')}}">
                        <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file3" name="pic[]" value="{{old('pic')}}">
                        <input type="file" class="form-control @error('pic') is-invalid @enderror" id="file4" name="pic[]" value="{{old('pic')}}">
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

@endsection