<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $table = 'notes';

    protected $fillable = [
        'location',
        'date',
        'no_container',
        'no_seal',
        'destination',
        'no_truck',
        'driver',
        'telp',
        'user_id'
    ];
    protected $casts = [
        'date' => 'datetime:d-m-Y',
    ];

    // Relationships
    public function signatures()
    {
        return $this->hasMany(Signature::class, 'id_note');
    }

    public function tumpukans()
    {
        return $this->hasMany(Tumpukan::class, 'id_note');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
