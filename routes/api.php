<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [UserController::class, 'authenticate']);

Route::middleware('auth:sanctum')->get('/me', [UserController::class, 'show']);
