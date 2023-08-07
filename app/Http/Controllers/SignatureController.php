<?php

namespace App\Http\Controllers;

use App\Services\SignatureService;
use Illuminate\Http\Request;
use App\Helpers\FormatApi;

class SignatureController extends Controller
{
    private $signatureService;

    public function __construct(SignatureService $signatureService)
    {
        $this->signatureService = $signatureService;
    }

    public function listSignature()
    {
        return $this->formatApiResponse($this->signatureService->listSignature(), 200);
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
        return $this->formatApiResponse($this->signatureService->signatureNote($validatedData), 200);
    }

    private function formatApiResponse($data, $statusCode)
    {
        if ($data) {
            return FormatApi::ApiCreate($statusCode, 'Success', $data);
        } else {
            return FormatApi::ApiCreate(400, 'Gagal');
        }
    }
}

