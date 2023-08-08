<?php

namespace App\Http\Controllers;

use App\Services\TumpukanService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TumpukanController extends Controller
{
    private $tumpukanService;

    public function __construct(TumpukanService $tumpukanService)
    {
        $this->tumpukanService = $tumpukanService;
    }

    public function listTumpukan()
    {
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'get data success'
            ],
            'data' => $this->tumpukanService->listTumpukan()
        ];

        return response()->json($response);
    }

    public function createTumpukan(Request $request)
    {
        $dataRequest = $request->json()->all();

        if (!is_array($dataRequest)) {
            return response()->json([
                'status' => 400,
                'error' => 400,
                'messages' => 'Invalid JSON data provided.'
            ], 400);
        }
        return $this->tumpukanService->createTumpukan($dataRequest);
    }
}
