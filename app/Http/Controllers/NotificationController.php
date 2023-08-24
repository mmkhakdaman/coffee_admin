<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\ProductOrderedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    public function index()
    {
        return 'a';
    }
}
