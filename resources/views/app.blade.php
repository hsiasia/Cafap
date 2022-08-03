<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        {{-- CSRF token --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- import extra css file by Laravel Mix 
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css"/>
        @vite('resources/assets/sass/app.scss') --}}

        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <title>Cafap</title>

        {{-- CSRF token add to axios header to stop bad request--}}
        <script type='text/javascript'>
             window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
        @vite('resources/assets/js/app.js')

    </head>
    <body>
        <div id="app">
            {{-- <p>
                <router-link to="/home">Go to Home</router-link>
            </p> --}}
            <router-view></router-view>
        </div>

        {{-- import extra js file by Laravel Mix
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        @vite('resources/assets/js/app.js') --}}

    </body>
</html>