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

        $successCount = 0;
        $failedCount = 0;

        foreach ($dataRequest as $tumpukanData) {
            $dataResponse = $this->tumpukanService->createTumpukan($tumpukanData);

            if ($dataResponse) {
                $successCount++;
            } else {
                $failedCount++;
            }
        }

        if ($successCount > 0) {
            $response = [
                'status' => 201,
                'error' => null,
                'messages' => [
                    'success' => $successCount . ' data inserted successfully'
                ]
            ];

            return response()->json($response, 201);
        }

        $response = [
            'status' => 401,
            'error' => 'Failed',
            'messages' => [
                'error' => $failedCount . ' data failed to insert'
            ]
        ];
        return response()->json($response, 401);
    }
}
