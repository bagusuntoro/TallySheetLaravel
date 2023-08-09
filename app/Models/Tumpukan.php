<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tumpukan extends Model
{
    use HasFactory;

    protected $table = 'tumpukans';

    protected $fillable = [
        'tumpukan_1',
        'tumpukan_2',
        'tumpukan_3',
        'tumpukan_4',
        'tumpukan_5',
        'tumpukan_6',
        'tumpukan_7',
        'tumpukan_8',
        'tumpukan_9',
        'tumpukan_10',
        'total',
        'id_note',
        'barang',
        'sppg'
    ];

    // Relationships
    public function note()
    {
        return $this->belongsTo(Note::class, 'id_note');
    }

    // public function barang()
    // {
    //     return $this->belongsTo(Barang::class, 'id_barang');
    // }
}
