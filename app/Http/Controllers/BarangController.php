<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\FormatApi;
use App\Services\BarangService;

class BarangController extends Controller
{
    private $barangService;

    public function __construct(BarangService $barangService)
    {
        $this->barangService = $barangService;
    }

    public function listBarang()
    {
        return $this->formatApiResponse($this->barangService->listBarang(), 200);
    }

    public function getBarangById($id)
    {
        return $this->formatApiResponse($this->barangService->getBarangById($id), 200);
    }

    public function createBarang(Request $request)
    {
        $validatedData = $request->validate([
            'jenis_barang' => 'required|string'
        ]);

        return $this->formatApiResponse($this->barangService->createBarang($validatedData), 201);
    }

    public function updateBarang(Request $request, $id)
    {
        $validateData = $request->validate([
            'jenis_barang' => 'required'
        ]);

        return $this->formatApiResponse($this->barangService->updateBarang($validateData, $id), 200);
    }

    public function deleteBarang($id)
    {
        return $this->formatApiResponse($this->barangService->deleteBarang($id), 200);
    }
    // format api dengan dinamis data dan status code
    public function formatApiResponse($data, $statusCode)
    {
        if ($data) {
            return FormatApi::ApiCreate($statusCode, 'Success', $data);
        } else {
            return FormatApi::ApiCreate(400, 'Gagal');
        }
    }
}
