@extends('layouts.app')

@section('content')
<div class="container" id="app">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <tracker></tracker>
        </div>
    </div>
    <hr>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <track-list></track-list>
        </div>
    </div>
</div>
@endsection
