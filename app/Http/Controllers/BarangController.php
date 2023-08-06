<?php

namespace App\Http\Controllers;

use App\Services\BarangService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BarangController extends Controller
{
    private $barangService;

    public function __construct(BarangService $barangService)
    {
        $this->barangService = $barangService;
    }

    public function listBarang()
    {
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'get data success'
            ],
            'data' => $this->barangService->listBarang()
        ];

        return response()->json($response);
    }

    public function getBarangById($id)
    {
        $barang = $this->barangService->getBarangById($id);

        if ($barang === null) {
            $response = [
                'status' => 404,
                'error' => 'Not found',
                'messages' => [
                    'error' => 'Data not found'
                ],
                'data' => null
            ];
        } else {
            $response = [
                'status' => 200,
                'error' => null,
                'messages' => [
                    'success' => 'Data found'
                ],
                'data' => $barang
            ];
        }

        return response()->json($response);
    }

    public function createBarang(Request $request)
    {
        $rules = [
            'jenis_barang' => 'required|string'
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
            'jenis_barang' => $request->input('jenis_barang'),
        ];

        $dataResponse = $this->barangService->createBarang($dataRequest);

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

    public function updateBarang(Request $request, $id)
    {
        $validateData = $request->validate([
            'jenis_barang' => 'required'
        ]);

        $barang = $this->barangService->updateBarang($id, $request);

        if ($barang === null) {
            $response = [
                'status' => 404,
                'error' => 'Not found',
                'messages' => [
                    'error' => 'Data not found'
                ],
                'data' => null
            ];
        } else {
            $response = [
                'status' => 200,
                'error' => null,
                'messages' => [
                    'success' => 'Data updated successfully'
                ],
                'data' => $barang
            ];
        }

        return response()->json($response);
    }

    public function deleteBarang($id)
    {
        $result = $this->barangService->deleteBarang($id);

        if ($result === false) {
            $response = [
                'status' => 404,
                'error' => 'Not found',
                'messages' => [
                    'error' => 'Data not found'
                ],
                'data' => null
            ];
        } else {
            $response = [
                'status' => 200,
                'error' => null,
                'messages' => [
                    'success' => 'Data deleted successfully'
                ],
                'data' => null
            ];
        }

        return response()->json($response);
    }
}
