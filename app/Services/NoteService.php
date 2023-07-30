<?php

namespace App\Services;
use App\Repositories\NoteRepository;

class NoteService
{
    private $noteRepository;
    public function __construct(NoteRepository $noteRepository)
    {
        $this->noteRepository = $noteRepository;
    }

    public function detailNote($id)
    {
        return $this->noteRepository->detailNote($id);
    }

    public function listNotes()
    {
        return $this->noteRepository->listNotes();
    }

    public function getNoteById($id)
    {
        return $this->noteRepository->getNoteById($id);
    }

    public function listNoteByUser($id)
    {
        return $this->noteRepository->listNoteByUser($id);
    }

    public function createNote($dataRequest)
    {
        return $this->noteRepository->createNote($dataRequest);
    }

    public function updateNote($id, $dataRequest)
    {
        return $this->noteRepository->updateNote($id, $dataRequest);
    }

    public function deleteNote($id)
    {
        return $this->noteRepository->deleteNote($id);
    }

}