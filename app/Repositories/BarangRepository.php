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

    public function updateBarang($id, array $dataRequest)
    {
        $data = $this->barang->find($id);
        return $data->update($dataRequest);
    }

    public function deleteBarang($id)
    {
        $barang = $this->barang->find($id);

        if (!$barang) {
            throw new \Exception('Data Barang tidak ditemukan');
        }

        try {
            \DB::beginTransaction();

            // Hapus data tumpukan terkait (jika ada)
            $barang->tumpukans()->delete();

            // Hapus data Barang
            $barang->delete();

            \DB::commit();

            return true; // Jika berhasil dihapus
        } catch (\Exception $e) {
            \DB::rollback();
            throw new \Exception('Terjadi kesalahan saat menghapus data Barang');
        }
    }

        


        // $data = $this->getBarangById($id);
        // if ($data) {
        //     $data->delete($id);
        //     return true;
        // }
        // return false;
    // }
}