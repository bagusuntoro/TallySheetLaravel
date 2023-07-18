<?php

namespace App\Services;
use App\Repositories\SignatureRepository;

class SignatureService
{
    private $signatureRepository;
    public function __construct(SignatureRepository $signatureRepository)
    {
        $this->signatureRepository = $signatureRepository;
    }

    public function listSignature()
    {
        return $this->signatureRepository->listSignature();
    }

    public function signatureNote($dataRequest)
    {
        return $this->signatureRepository->signatureNote($dataRequest);
    }
}