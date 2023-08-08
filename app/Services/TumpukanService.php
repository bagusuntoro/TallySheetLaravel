<?php

namespace App\Services;
use App\Repositories\TumpukanRepository;

class TumpukanService
{
    private $tumpukanRepository;
    public function __construct(TumpukanRepository $tumpukanRepository)   
    {
        $this->tumpukanRepository = $tumpukanRepository;
    }

    public function listTumpukan()
    {
        return $this->tumpukanRepository->listTumpukan();
    }

    public function createTumpukan($dataRequest)
    {
        $successCount = 0;
        $failedCount = 0;

        foreach ($dataRequest as $tumpukanData) {
            $dataResponse = $this->tumpukanRepository->createTumpukan($tumpukanData);

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




        return $this->tumpukanRepository->createTumpukan($dataRequest);
    }
}