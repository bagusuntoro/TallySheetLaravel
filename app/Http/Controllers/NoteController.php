<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\NoteService;
use App\Http\Controllers\BarangController;

class NoteController extends Controller
{
    private $noteService;
    private $barangController;

    public function __construct(NoteService $noteService, BarangController $barangController)
    {
        $this->noteService = $noteService;
        $this->barangController = $barangController;
    }

    public function detailNote($id)
    {
        return $this->barangController->formatApiResponse($this->noteService->detailNote($id), 200);
    }

    public function listNotes()
    {
        return $this->barangController->formatApiResponse($this->noteService->listNotes(), 200);
    }

    public function getNoteById($id)
    {
        return $this->barangController->formatApiResponse($this->noteService->getNoteById($id), 200);
    }

    public function listNoteByUser($id)
    {
        return $this->barangController->formatApiResponse($this->noteService->listNoteByUser($id), 200);
    }

    public function createNote(Request $request)
    {
        $validatedData = $request->validate([
            'location' => 'required',
            'date' => 'required',
            'no_container' => 'required',
            'no_seal' => 'required',
            'destination' => 'required',
            'no_truck' => 'required',
            'driver' => 'required',
            'telp' => 'required',
            'user_id' => 'required',
        ]);
        return $this->barangController->formatApiResponse($this->noteService->createNote($validatedData), 200);
    }

    public function updateNote(Request $request, $id)
    {
        $validateData = $request->validate([
            'location' => 'required',
            'date' => 'required',
            'no_container' => 'required',
            'no_seal' => 'required',
            'destination' => 'required',
            'no_truck' => 'required',
            'driver' => 'required',
            'telp' => 'required',
        ]);

        return $this->barangController->formatApiResponse($this->noteService->updateNote($id, $validateData), 200);
    }

    public function deleteNote($id)
    {
        return $this->barangController->formatApiResponse($this->noteService->deleteNote($id), 200);
    }
}
