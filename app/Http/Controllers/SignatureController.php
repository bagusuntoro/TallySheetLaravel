<?php

namespace App\Http\Controllers;

use App\Services\SignatureService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SignatureController extends Controller
{
    private $signatureService;

    public function __construct(SignatureService $signatureService)
    {
        $this->signatureService = $signatureService;
    }

    public function listSignature()
    {
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'get data success'
            ],
            'data' => $this->signatureService->listSignature()
        ];

        return response()->json($response);
    }

    public function signatureNote(Request $request)
    {
        $rules = [
            'petugas' => 'required|string',
            'petugas_signature' => 'required|string',
            'supir' => 'required|string',
            'supir_signature' => 'required|string',
            'id_note' => 'required|numeric'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'error' => 'Validation failed',
                'messages' => $validator->errors(),
            ], 401);
        }

        $dataRequest = [
            'petugas' => $request->input('petugas'),
            'petugas_signature' => $request->input('petugas_signature'),
            'supir' => $request->input('supir'),
            'supir_signature' => $request->input('supir_signature'),
            'id_note' => $request->input('id_note'),
        ];

        $dataResponse = $this->signatureService->signatureNote($dataRequest);

        if ($dataResponse) {
            $response = [
                'status' => 201,
                'error' => null,
                'messages' => [
                    'success' => 'data inserted'
                ]
            ];

            return response()->json($response, 201);
        }

        $response = [
            'status' => 401,
            'error' => 'failed',
        ];

        return response()->json($response, 401);
    }
}

