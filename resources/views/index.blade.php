
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- SweetAlert2 CDN -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        
        @viteReactRefresh
        @vite(['resources/css/index.css', 'resources/js/index.jsx'])

    </head>

    <body>
        <div id="app" data-page="@isset($result){{$result}}@else null @endisset"></div>
    </body>

    @if(session()->has('string'))
         @include('layouts.alert')
    @endif
</html>
