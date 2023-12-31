<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use DateTimeZone;
use DateTime;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailVerification;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function listUser()
    {
        $data = User::all();
        if ($data) {
            return response()->json([
                'message' => 'success',
                'data' => $data
            ]);
        }
        return response()->json([
            'message' => 'failed',
            'data' => null
        ]);
    }
    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'nik' => 'required',
            'telp' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'alamat' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $user = User::create([
            'name' => request('name'),
            'nik' => request('nik'),
            'telp' => request('telp'),
            'email' => request('email'),
            'alamat' => request('alamat'),
            'password' => bcrypt(request('password')),
        ]);

        if ($user) {
            // Mail::to($user->email)->send(new EmailVerification($user));
            return response()->json(['message' => 'Registration successful']);
        } else {
            return response()->json(['message' => 'Registration failed'], 500);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Debug statement
        // echo "Token: $token";
        $user = User::where('email', request('email'))->first();

        return $this->respondWithToken($token, $user->role);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $role)
    {
        $expirationTime = auth()->factory()->getTTL() * 60;
        $expiresInTimestamp = time() + $expirationTime;
    
        $dateTimeZone = new DateTimeZone('Asia/Jakarta');
        $dateTime = new DateTime('@' . $expiresInTimestamp);
        $dateTime->setTimezone($dateTimeZone);
        $expiresIn = $dateTime->format('Y-m-d H:i:s');
        
        return response()->json([
            'access_token' => $token,
            'role' => $role,
            'token_type' => 'bearer',
            'expires_in' => $expiresIn
        ]);
    }
    
    public function deleteUser($id){
        $data = User::find($id);
        if ($data) {
            $data->delete();
            return response()->json([
                'message' => 'success',
            ]);
        }
        return response()->json([
            'message' => 'data not found'
        ]);
    }
}