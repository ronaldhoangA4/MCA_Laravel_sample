<?php

/**
* @OA\Info(
*     title="MCA NodeJS Sample API documentation",
*     version="1.0.0",
*     description="Provides data for MCA client web application",
* )
*/

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::prefix('api')->group(function () {
    /**
    * @OA\Get(
    *     path="/getGiveaways",
    *     summary="Get all product category",
    *     description="Retrieve all product category data",
    *     operationId="getAllProductCategories",
    *     @OA\Response(
    *         response=200,
    *         description="Successful operation",
    *         @OA\JsonContent(
    *             type="array",
    *             @OA\Items(
    *                 @OA\Property(property="id", type="integer"),
    *                 @OA\Property(property="name", type="string"),
    *                 @OA\Property(property="image", type="string")
    *             )
    *         )
    *     ),
    *     @OA\Response(
    *         response=500,
    *         description="Internal server error",
    *         @OA\JsonContent(
    *             @OA\Property(property="message", type="string")
    *         )
    *     )
    * )
    */
    Route::get('/getGiveaways', function () {
        try {
            $giveaways = DB::select('SELECT * FROM GIVEAWAY');
            return response()->json($giveaways);
        } catch (Throwable $e) { return response()->json(['error' => 'Internal server error'], Response::HTTP_INTERNAL_SERVER_ERROR); }
    });

    /**
    * @OA\Get(
    *     path="/api/getVideos",
    *     summary="Get all handler videos",
    *     description="Retrieve all handler videos",
    *     @OA\Response(
    *         response=200,
    *         description="Successful operation",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="id", type="integer"),
    *             @OA\Property(property="name", type="string"),
    *             @OA\Property(property="youtubeId", type="string")
    *         )
    *     ),
    *     @OA\Response(
    *         response=500,
    *         description="Internal server error",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="message", type="string")
    *         )
    *     )
    * )
    */
    Route::get('/getVideos', function () {
        try {
            $videos = DB::select('SELECT * FROM VIDEO ORDER BY id DESC');
            return response()->json($videos);
        } catch (Throwable $e) { return response()->json(['error' => 'Internal server error'], Response::HTTP_INTERNAL_SERVER_ERROR); }
    });

    /**
    * @OA\Get(
    *     path="/api/getCategories",
    *     summary="Get all shop category data",
    *     description="Retrieve all shop category data",
    *     @OA\Response(
    *         response=200,
    *         description="Successful operation",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="id", type="integer"),
    *             @OA\Property(property="name", type="string"),
    *             @OA\Property(property="image", type="string")
    *         )
    *     ),
    *     @OA\Response(
    *         response=500,
    *         description="Internal server error",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="message", type="string")
    *         )
    *     )
    * )
    */
    Route::get('/getCategories', function () {
        try {
            $categories = DB::select('SELECT * FROM CATEGORY ORDER BY id DESC');
            return response()->json($categories);
        } catch (Throwable $e) { return response()->json(['error' => 'Internal server error'], Response::HTTP_INTERNAL_SERVER_ERROR); }
    });

    /**
    * @OA\Get(
    *     path="/api/getProducts/{category}",
    *     summary="Get all products of a category",
    *     description="Retrieve all products of a specific category",
    *     @OA\Parameter(
    *         name="category",
    *         in="path",
    *         required=true,
    *         @OA\Schema(type="string"),
    *         description="Category name"
    *     ),
    *     @OA\Response(
    *         response=200,
    *         description="Successful operation",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="id", type="integer"),
    *             @OA\Property(property="name", type="string"),
    *             @OA\Property(property="price", type="number"),
    *             @OA\Property(property="desc", type="string"),
    *             @OA\Property(property="image", type="string")
    *         )
    *     ),
    *     @OA\Response(
    *         response=500,
    *         description="Internal server error",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="message", type="string")
    *         )
    *     )
    * )
    */
    Route::get('/getProducts/{category}', function($category) {
        try {
            $products = DB::select('SELECT PRODUCT.* FROM PRODUCT
                    JOIN PRODUCT_CATEGORY ON PRODUCT.id = PRODUCT_CATEGORY.productId
                    JOIN CATEGORY ON CATEGORY.id = PRODUCT_CATEGORY.categoryId
                    WHERE CATEGORY.id = ?', [$category]);
            return response()->json($products);
        } catch (Throwable $e) { return response()->json(['error' => 'Internal server error'], Response::HTTP_INTERNAL_SERVER_ERROR); }
    });

    /**
    * @OA\Post(
    *     path="/api/contact",
    *     summary="Handle contact enquiry and return a response message",
    *     description="Endpoint to handle contact enquiries and return a response message",
    *     @OA\Response(
    *         response=200,
    *         description="Contact enquiry received successfully",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="message", type="string")
    *         )
    *     ),
    *     @OA\Response(
    *         response=500,
    *         description="Internal server error",
    *         @OA\JsonContent(
    *             type="object",
    *             @OA\Property(property="message", type="string")
    *         )
    *     )
    * )
    */
    Route::post('/contact', function(Request $request) {
        try {
            $name = $request->input('name');
            $email = $request->input('email');
            $message = $request->input('message');
        } catch (Throwable $e) { return response()->json(['error' => 'Unable to retrieve request data']); }
        try {
            DB::insert("INSERT INTO MESSAGE (name, email, message) VALUES (?, ?, ?)", [$name, $email, $message]);
            //Log::info('Message received and saved:', ['name' => $name, 'email' => $email, 'message' => $message]);
            return response()->json(['message' => 'Your submission was deemed successful for testing purposes only.']);
        } catch (Throwable $e) { return response()->json(['error' => 'Internal server error'], Response::HTTP_INTERNAL_SERVER_ERROR); }
    });
});

/**
 * @OA\Get(
 *     path="/api/users",
 *     operationId="getAllUsers",
 *     tags={"Users"},
 *     summary="Get all users",
 *     description="Retrieve a list of all users.",
 *     @OA\Response(
 *         response=200,
 *         description="Successful operation",
 *         @OA\JsonContent(
 *             type="array",
 *             @OA\Items(ref="#/components/schemas/User")
 *         )
 *     ),
 *     @OA\Response(response=401, description="Unauthenticated")
 * )
 */
Route::get('/{path?}', function () {
    return view('app');
})->where('path', '.*');