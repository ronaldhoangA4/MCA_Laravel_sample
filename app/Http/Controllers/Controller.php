<?php

/**
* @OA\Info(
*     title="MCA NodeJS Sample API documentation",
*     version="1.0.0",
*     description="Provides data for MCA client web application",
* )
*/

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
