<?php

namespace App\Enums;

enum OrderStatusEnum: string
{
    case PENDING = 'pending';
    case CONFIRMED = 'confirmed';
    case CANCELLED = 'cancelled';
    case COMPLETED = 'completed';

    public static function getValues()
    {
        return [
            self::PENDING->value,
            self::CONFIRMED->value,
            self::CANCELLED->value,
            self::COMPLETED->value,
        ];
    }
}
