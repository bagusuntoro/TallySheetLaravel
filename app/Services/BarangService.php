<?php

namespace App\Services;
use App\Repositories\BarangRepository;

class BarangService
{
    private $barangRepository;
    public function __construct(BarangRepository $barangRepository)
    {
        $this->barangRepository = $barangRepository;
    }

    public function listBarang()
    {
        return $this->barangRepository->listBarang();
    }

    public function getBarangById($id)
    {
        return $this->barangRepository->getBarangById($id);
    }

    public function createBarang($dataRequest)
    {
        return $this->barangRepository->createBarang($dataRequest);
    }

    public function updateBarang($id, $dataRequest)
    {
        $data = [
            'jenis_barang' => $dataRequest->jenis_barang
        ];
        return $this->barangRepository->updateBarang($id, $data);
    }

    public function deleteBarang($id)
    {
        return $this->barangRepository->deleteBarang($id);
    }
}