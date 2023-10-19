<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response() -> json(User::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        User::create ([
'name' => $request->name,
'email' => $request->email,
'password' => bcrypt($request->password)
        ]);

        return response() -> json('sucessfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return response()->json(User::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $user = User::whereId($id)->first();

      $user->update ([
            'name' => $request->name,
            'email' => $request->email,
          
                    ]);
            
                    return response() -> json('sucessfully updated');
            
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
dd($id);
       User::find($id)->delete();

       return response()->json('yes');  

      
    }
}
