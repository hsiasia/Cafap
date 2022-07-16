<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        {{-- CSRF token --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- import extra css file by Laravel Mix --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css"/>

        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <title>Roast</title>

        {{-- CSRF token add to axios header to stop bad request--}}
        <script type='text/javascript'>
             window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </head>
    <body>

        <div id="app">
            <router-view></router-view>
        </div>

        {{-- import extra js file by Laravel Mix --}} 
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

    </body>
</html>