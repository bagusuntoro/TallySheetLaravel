<?php

namespace App\Repositories;
use App\Models\Tumpukan;

class TumpukanRepository
{
    private $tumpukan;
    public function __construct(Tumpukan $tumpukan)
    {
        $this->tumpukan = $tumpukan;
    }

    public function listTumpukan()
    {
        $data = $this->tumpukan->get();
        return $data;
    }

    public function createTumpukan($dataRequest)
    {
        if ($this->tumpukan->create($dataRequest)) {
            return true;
        }
        return false;
    }
}