<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class ProductOrderedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $msg;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($msg = "Add")
    {
        $this->msg = $msg;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', WebPushChannel::class];
    }

    public function toDatabase($notifiable)
    {
        return [
            'description' => $this->msg,
        ];
    }

    public function toWebPush($notifiable, $notification)
    {
        Log::info('*** toWebPush ***');
        Log::info('*** new message: ' . $this->msg);

        return (new WebPushMessage)
            ->title('New message for you!')
            ->body($this->msg);
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
