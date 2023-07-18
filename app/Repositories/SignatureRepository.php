<?php

namespace App\Repositories;
use App\Models\Signature;

class SignatureRepository
{
    private $signature;
    public function __construct(Signature $signature)
    {
        $this->signature = $signature;
    }

    public function listSignature()
    {
        return $this->signature->get();
    }

    public function signatureNote($dataRequest)
    {
        return $this->signature->create($dataRequest);
    }

}