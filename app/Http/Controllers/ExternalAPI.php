<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\BarangController;

class ExternalAPI extends Controller
{
    private $barangController;

    public function __construct(BarangController $barangController)
    {
        $this->barangController = $barangController;
    }

    public function getDataLokasi()
    {
        $url = 'http://192.168.1.252/fintech2/integrasi/Tally_Sheet/getDataLokasi';
        $apiKey = '0da02e925df547badf474b4c667e60cc';

        $response = Http::withHeaders([
            'APIKEY' => $apiKey,
        ])->post($url);

        $data = $response->json();

        return $this->barangController->formatApiResponse($data, 200);
    }
    public function getDataKeterangan()
    {
        $url = 'http://192.168.1.252/fintech2/integrasi/Tally_Sheet/getDataKeterangan';
        $apiKey = '0da02e925df547badf474b4c667e60cc';

        $response = Http::withHeaders([
            'APIKEY' => $apiKey,
        ])->post($url);

        $data = $response->json();

        return $this->barangController->formatApiResponse($data, 200);
    }
    public function getDataSPPG(Request $request)
    {
        $url = 'http://192.168.1.252/fintech2/integrasi/Tally_Sheet/getDataSPPG';
        $apiKey = '0da02e925df547badf474b4c667e60cc';

        $response = Http::withHeaders([
            'APIKEY' => $apiKey,
            'KET' => $request->id_keterangan,
            'LOKASI' => $request->lokasi,
        ])->post($url);

        $data = $response->json();

        return $this->barangController->formatApiResponse($data, 200);
    }
}
