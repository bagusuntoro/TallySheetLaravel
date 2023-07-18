<?php

namespace App\Http\Controllers;

use App\Services\NoteService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NoteController extends Controller
{
    private $noteService;

    public function __construct(NoteService $noteService)
    {
        $this->noteService = $noteService;
    }

    public function listNotes()
    {
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'get data success'
            ],
            'data' => $this->noteService->listNotes()
        ];

        return response()->json($response);
    }

    public function getNoteById($id)
    {
        $note = $this->noteService->getNoteById($id);

        if ($note === null) {
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
                'data' => $note
            ];
        }

        return response()->json($response);
    }

    public function createNote(Request $request)
    {
        $rules = [
            'location' => 'required',
            'date' => 'required',
            'no_container' => 'required',
            'no_seal' => 'required',
            'destination' => 'required',
            'no_truck' => 'required',
            'driver' => 'required',
            'telp' => 'required',
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
            'location' => $request->input('location'),
            'date' => $request->input('date'),
            'no_container' => $request->input('no_container'),
            'no_seal' => $request->input('no_seal'),
            'destination' => $request->input('destination'),
            'no_truck' => $request->input('no_truck'),
            'driver' => $request->input('driver'),
            'telp' => $request->input('telp'),
        ];

        $dataResponse = $this->noteService->createNote($dataRequest);

        if ($dataResponse) {
            $response = [
                'status' => 201,
                'error' => null,
                'messages' => [
                    'success' => 'data inserted'
                ],
                'data' =>$dataResponse
            ];

            return response()->json($response, 201);
        }

        $response = [
            'status' => 401,
            'error' => 'failed',
        ];

        return response()->json($response, 401);
    }

    public function updateNote(Request $request, $id)
    {
        $rules = [
            'location' => 'required',
            'date' => 'required',
            'no_container' => 'required',
            'no_seal' => 'required',
            'destination' => 'required',
            'no_truck' => 'required',
            'driver' => 'required',
            'telp' => 'required',
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
            'location' => $request->input('location'),
            'date' => $request->input('date'),
            'no_container' => $request->input('no_container'),
            'no_seal' => $request->input('no_seal'),
            'destination' => $request->input('destination'),
            'no_truck' => $request->input('no_truck'),
            'driver' => $request->input('driver'),
            'telp' => $request->input('telp'),
        ];

        $note = $this->noteService->updateNote($id, $dataRequest);

        if ($note === null) {
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
                'data' => $note
            ];
        }

        return response()->json($response);
    }

    public function deleteNote($id)
    {
        $result = $this->noteService->deleteNote($id);

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