<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'barangs';

    protected $fillable = [
        'jenis_barang',
    ];

    public function tumpukans()
    {
        return $this->hasMany(Tumpukan::class, 'id_barang');
    }
}
