<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="کارت سفارش آنلاین" />
    <link rel="manifest" href="/manifest.json" />

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <script src="{{ asset('js/enable-push.js') }}?1" defer></script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased" dir="rtl">
    @inertia


    @auth
    @endauth
</body>

</html>
