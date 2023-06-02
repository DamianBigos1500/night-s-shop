<?php

use App\Enums\StockStatus;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name", 512);
            $table->string("slug", 512)->unique();
            $table->string("code", 256);
            $table->text("short_description");
            $table->text("description");
            $table->decimal("regular_price");
            $table->decimal("sale_price")->nullable();
            $table->enum("stock_status", StockStatus::TYPES)->default(StockStatus::IN_STOCK);
            $table->integer("quantity");
            $table->boolean("featured")->default(false);
            $table->softDeletes();
            $table->foreignIdFor(Category::class)->nullable();
            $table->foreignIdFor(User::class, 'deleted_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
