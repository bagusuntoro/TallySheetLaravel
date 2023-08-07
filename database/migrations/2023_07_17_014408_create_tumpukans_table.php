<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTumpukansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tumpukans', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('tumpukan_1')->nullable();
            $table->unsignedInteger('tumpukan_2')->nullable();
            $table->unsignedInteger('tumpukan_3')->nullable();
            $table->unsignedInteger('tumpukan_4')->nullable();
            $table->unsignedInteger('tumpukan_5')->nullable();
            $table->unsignedInteger('tumpukan_6')->nullable();
            $table->unsignedInteger('tumpukan_7')->nullable();
            $table->unsignedInteger('tumpukan_8')->nullable();
            $table->unsignedInteger('tumpukan_9')->nullable();
            $table->unsignedInteger('tumpukan_10')->nullable();
            $table->unsignedInteger('total')->nullable();
            $table->foreignId('id_note')->constrained('notes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_barang')->constrained('barangs')->onDelete('cascade')->onUpdate('cascade');
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
        // Drop foreign key constraints before dropping the table
        Schema::table('tumpukans', function (Blueprint $table) {
            $table->dropForeign(['id_note']);
            $table->dropForeign(['id_barang']);
        });
        Schema::dropIfExists('tumpukans');
    }
}


