<?php

namespace App\Http\Controllers;

use App\Tracker;
use Illuminate\Http\Request;

class TrackerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Tracker::orderBy('created_at','desc')->get(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        error_log("post tracker");
        $user_data = new Tracker($request->all());
        $user_data->save();

        return response()->json($user_data, 200);;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Traker  $traker
     * @return \Illuminate\Http\Response
     */
    public function show(Traker $traker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Traker  $traker
     * @return \Illuminate\Http\Response
     */
    public function edit(Traker $traker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Traker  $traker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Traker $traker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Traker  $traker
     * @return \Illuminate\Http\Response
     */
    public function destroy(Traker $traker)
    {
        //
    }
}
