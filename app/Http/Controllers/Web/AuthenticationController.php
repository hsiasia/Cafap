<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use App\Models\User;
use Auth;

class AuthenticationController extends Controller
{
    /*  
    * redirect to OAuth provider to get auth code
    *
    * param    $account    {social} from web.php
    *
    */
    public function getSocialRedirect($account)
    {
        try {
            return Socialite::with($account)->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('/login');
        }
    }

    /*  
    * OAuth return user data and save to DB and login
    *
    * param    $account    user data
    *
    */
    public function getSocialCallback($account)
    {
        // user data form OAuth return
        $socialUser = Socialite::with($account)->user();
        // check user data dupicate or not in DB
        $user = User::where( 'provider_id', '=', $socialUser->id )
            ->where( 'provider', '=', $account )
            ->first();
        if ($user == null) {
            // if not save to users table
            $newUser = new User();

            $newUser->name        = $socialUser->getName();
            $newUser->email       = $socialUser->getEmail() == '' ? '' : $socialUser->getEmail();
            $newUser->avatar      = $socialUser->getAvatar();
            $newUser->password    = '';
            $newUser->provider    = $account;
            $newUser->provider_id = $socialUser->getId();

            $newUser->save();
            $user = $newUser;
        }

        // login user
        Auth::login( $user );

        // redirect
        return redirect('/');
    }
}