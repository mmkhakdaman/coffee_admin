<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use App\Notifications\ProductOrderedNotification;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::redirect('/', '/order/list');

Route::post('push', function (Request $request) {
    $request->validate([
        'endpoint'    => 'required',
        'keys.auth'   => 'required',
        'keys.p256dh' => 'required'
    ]);
    $endpoint = $request->endpoint;
    $token = $request->keys['auth'];
    $key = $request->keys['p256dh'];
    $user = auth()->user();
    $user->updatePushSubscription($endpoint, $key, $token);

    return response()->json(['success' => true], 200);
})->middleware('auth');

Route::get('notif', [\App\Http\Controllers\NotificationController::class, 'index']);


Route::get('dev-login',function (){
    auth()->loginUsingId(1);
    return redirect()->route('order.list');
});

Route::get(
    '/order/list',
    [\App\Http\Controllers\OrderController::class, 'list']
)->middleware(['auth', 'verified'])->name('order.list');
Route::get(
    '/order/history',
    [\App\Http\Controllers\OrderController::class, 'history']
)->middleware(['auth', 'verified'])->name('order.history');

Route::put('/order/{order}/confirm', [\App\Http\Controllers\OrderController::class, 'confirm'])
    ->middleware(['auth', 'verified'])->name('order.confirm');


Route::put('/order/{order}/cancel', [\App\Http\Controllers\OrderController::class, 'cancel'])
    ->middleware(['auth', 'verified'])->name('order.cancel');
Route::put('/order/{order}/complete', [\App\Http\Controllers\OrderController::class, 'complete'])
    ->middleware(['auth', 'verified'])->name('order.complete');

Route::resource('products', \App\Http\Controllers\ProductController::class)->middleware(['auth', 'verified']);

Route::put(
    '/products/{product}/toggle-in-stock',
    [\App\Http\Controllers\ProductController::class, 'toggleInStock']
)->middleware(['auth', 'verified'])->name('products.toggle-in-stock');

Route::apiResource('categories', \App\Http\Controllers\Api\CategoryController::class)->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
