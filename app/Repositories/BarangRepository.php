<?php

namespace App\Repositories;
use App\Models\Barang;

class BarangRepository
{
    private $barang;
    public function __construct(Barang $barang)
    {
        $this->barang = $barang;
    }

    public function listBarang()
    {
        $data = $this->barang->get();
        return $data;
    }

    public function getBarangById($id)
    {
        $data = $this->barang->find($id);
        return $data;
    }

    public function createBarang($dataRequest)
    {
        if ($this->barang->create($dataRequest)) {
            return true;
        }
        return false;
    }

    public function updateBarang($id, $dataRequest)
    {
        $data = $this->barang->find($id);
        return $data->update($dataRequest);
    }

    public function deleteBarang($id)
    {
        $data = $this->getBarangById($id);
        if ($data) {
            $data->delete($id);
            return true;
        }
        return false;
    }
}