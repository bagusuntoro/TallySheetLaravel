<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    use HasFactory;

    protected $table = 'signatures';

    protected $fillable = [
        'petugas',
        'petugas_signature',
        'supir',
        'supir_signature',
        'id_note',
    ];
    // Relationships
    public function note()
    {
        return $this->belongsTo(Note::class, 'id_note');
    }
}
