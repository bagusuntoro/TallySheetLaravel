<?php

namespace App\Http\Controllers;

use App\Services\SignatureService;
use Illuminate\Http\Request;
use App\Http\Controllers\BarangController;

class SignatureController extends Controller
{
    private $signatureService;
    private $barangController;

    public function __construct(SignatureService $signatureService, BarangController $barangController)
    {
        $this->signatureService = $signatureService;
        $this->barangController = $barangController;
    }

    public function listSignature()
    {
        return $this->barangController->formatApiResponse($this->signatureService->listSignature(), 200);
    }

    public function signatureNote(Request $request)
    {
        $validatedData = $request->validate([
            'petugas' => 'required|string',
            'petugas_signature' => 'required|string',
            'supir' => 'required|string',
            'supir_signature' => 'required|string',
            'id_note' => 'required|numeric'
        ]);
        return $this->barangController->formatApiResponse($this->signatureService->signatureNote($validatedData), 200);
    }
}

