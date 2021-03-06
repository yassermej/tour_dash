<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @if (isset($favicon))
            <link rel="icon" type="image/png" sizes="32x32" href="{{ $favicon }}">    
        @else
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        @endif

        <!-- Fonts -->
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        @if (isset($heading_font) && isset($text_font))
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={{$heading_font}}|{{$text_font}}:300,400,500,700,900">
        @else
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Indie+Flower" />
        @endif

        @if (isset($primary_color))
            <meta name="msapplication-TileColor" content="{{$primary_color}}">
            <meta name="theme-color" content="{{$primary_color}}">
        @else
            <meta name="msapplication-TileColor" content="#1f77fa">
            <meta name="theme-color" content="#ffffff">
        @endif

        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1f77fa">
        
        <title>@yield('title') | Tourdash</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @yield('css')
        @if (Auth::check())
            <script>
                window.xsrf_token = "{{ request()->cookie('XSRF-TOKEN') }}";
                window.access_token = "{{ Auth::user()->createToken('TourDash')->accessToken }}";
            </script>
        @endif
        @if (isset($favicon))
            <script>
                window.favicon = "{{ $favicon }}"
            </script>
        @endif
        @yield('marketing')
    </head>
    <body>
        @yield('root-component')
        @yield('javascript')
    </body>
</html>
