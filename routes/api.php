<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\SignatureController;
use App\Http\Controllers\TumpukanController;


Route::group([
    'prefix' => 'auth'
  ], function () {
    Route::post('register', [AuthController::class,'register']);
    Route::post('login', [AuthController::class,'login']);
    Route::group([
      'middleware' => 'auth:api'
    ], function(){
      Route::post('logout', [AuthController::class,'logout']);
      Route::post('refresh', [AuthController::class, 'refresh']);
      Route::get('me', [AuthController::class,'me']);
  
      // voting process
      Route::group([
        'middleware' => 'auth:api'
      ], function () {
        // Routes for BarangController
        Route::get('barang', [BarangController::class, 'listBarang']);
        Route::get('barang/{id}', [BarangController::class, 'getBarangById']);
        Route::post('barang', [BarangController::class, 'createBarang']);
        Route::put('barang/{id}', [BarangController::class, 'updateBarang']);
        Route::delete('barang/{id}', [BarangController::class, 'deleteBarang']);
        
        // Routes for NoteController
        Route::get('notes-user/{id}', [NoteController::class, 'listNoteByUser']);
        Route::get('notes', [NoteController::class, 'listNotes']);
        Route::get('notes/{id}', [NoteController::class, 'getNoteById']);
        Route::post('notes', [NoteController::class, 'createNote']);
        Route::put('notes/{id}', [NoteController::class, 'updateNote']);
        Route::delete('notes/{id}', [NoteController::class, 'deleteNote']);
        
        // Routes for SignatureController
        Route::get('signatures', [SignatureController::class, 'listSignature']);
        Route::post('signatures', [SignatureController::class, 'signatureNote']);
        
        // Routes for TumpukanController
        Route::get('tumpukan', [TumpukanController::class, 'listTumpukan']);
        Route::post('tumpukan', [TumpukanController::class, 'createTumpukan']);

        // list user
        Route::get('user', [AuthController::class, 'listUser']);
        Route::delete('user/{id}', [AuthController::class, 'deleteUser']);
      });
      
    });
  });

