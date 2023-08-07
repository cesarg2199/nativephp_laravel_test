<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Native\Laravel\Facades\MenuBar;

class MainController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request): Response
    {
        return inertia('Main');
    }

    public function settings(Request $request): Response
    {
        return inertia('Settings');
    }

    public function hide(Request $request): void
    {
        $status = $request->input('status');
        MenuBar::label('Status: '.$status);
    }
}


