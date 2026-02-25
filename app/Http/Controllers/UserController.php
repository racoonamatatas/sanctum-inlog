<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): JsonResponse
    {
        // Checks if the provided details adhere to the rules i.e.
        //      -> Is there an email in the email input field.
        //      -> Is there a string in the password input field.
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // Authenticates provided details with the database.
        if (Auth::attempt($credentials)) {

            $request->session()->regenerate();

            return response()->json(['message' => 'Logged in successfully']);
        }

        return response()->json([
            'message' => 'The provided credentials do not match our records.'
        ], 401);
    }

    public function show(Request $request): JsonResponse
    {
        // Return the authenticated user's information
        return response()->json($request->user());
    }
}
