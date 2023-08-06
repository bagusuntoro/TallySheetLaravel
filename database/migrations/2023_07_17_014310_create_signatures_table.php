<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSignaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('signatures', function (Blueprint $table) {
            $table->id();
            $table->string('petugas');
            $table->mediumText('petugas_signature');
            $table->string('supir');
            $table->mediumText('supir_signature');
            $table->unsignedBigInteger('id_note');
            $table->foreign('id_note')->references('id')->on('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop foreign key before dropping the table
        Schema::table('signatures', function (Blueprint $table) {
            $table->dropForeign(['id_note']);
        });
        Schema::dropIfExists('signatures');
    }
}
