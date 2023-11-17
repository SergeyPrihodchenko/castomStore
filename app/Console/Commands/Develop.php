<?php

namespace App\Console\Commands;

use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\AdminMainPageController;
use App\Http\Controllers\MailController;
use App\Mail\OrderShipped;
use App\Models\Admin\Catalog\Category;
use App\Models\Admin\MainPage\Header;
use App\Models\Admin\MainPage\Image;
use App\Models\Admin\MainPage\MainPage;
use App\Models\Admin\MainPage\Subheader;
use App\Models\Admin\MainPage\Title;
use App\Models\Registr2FA;
use App\Models\TimeZone;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class Develop extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Title::create(['title' => 'test']);
        // Header::create(['header' => 'test']);
        // Subheader::create(['subheader' => 'test']);
        // Image::create(['img_path' => 'test']);
        // MainPage::create([
        //     'title_id' => 1,
        //     'header_id' => 1,
        //     'subheader_id' => 1,
        //     'image_id' => 1,
        // ]);
        // $main = new AdminMainPageController;
        // $main->getAttributes();

        // $zone = new TimeZone();

        // $timeZone = $zone->getTimeZoneFromIP();

        Mail::to('S.prihodchenko@yandex.ru')->send(new OrderShipped(123123));

    }
}
