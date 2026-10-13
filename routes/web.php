<?php

use Illuminate\Support\Facades\Route;

Route::get('/healthz', function () {
    return response()->json([
        'status' => 'ok',
        'framework' => 'laravel',
        'version' => app()->version(),
        'php' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return view('welcome');
});
