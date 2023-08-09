<?php

namespace App\Repositories;
use App\Models\Note;

class NoteRepository
{
    private $note;
    public function __construct(Note $note)
    {
        $this->note = $note ;
    }

    public function detailNote($id)
    {
        return $this->note->where('id', $id)->with('signatures', 'tumpukans')->get();
    }

    public function listNotes()
    {
        return $this->note->get();
    }

    public function getNoteById($id)
    {
        return $this->note->find($id);
    }

    public function listNoteByUser($id)
    {
        return $this->note->where('user_id', $id)->get();
    }

    public function createNote($dataRequest)
    {
        return $this->note->create($dataRequest);
    }

    public function updateNote($id, array $dataRequest)
    {
        $data = $this->getNoteById($id);
        return $data->update($dataRequest);
    }

    public function deleteNote($id)
    {
        $data = $this->getNoteById($id);
        if ($data) {
            $data->delete($id);
            return true;
        }
        return false;
    }
}