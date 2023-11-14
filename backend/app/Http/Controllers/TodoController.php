<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TodoController extends Controller
{
    public function show(){
        $tasks = Todo::all();
        return response()->json($tasks);
    }

    public function store(Request $request, Todo $task){
        $task->taskName = $request->taskName;
        $task->taskDescription = $request->taskDescription;
        $task->status = $request->status;
        $task->dueDate = $request->dueDate;

        if($task->save()){
            return response()->json([
                'message' => 'Task added sucessfuly'
            ]);
        }else {
            return response()->json(['error' => 'Fill all parameters.']);
        }

    }
    public function destroy(Todo $task, $id, ModelNotFoundException $e){
        $model = Todo::where('id', $id)->first();

        if($model){
            $model->delete();
            return response()->json([
                'message' => 'Task Id:'.$id.' deleted sucessfuly'
            ]);
        }else {
            return response()->json(['error' => 'Task '.$id.' not found.']);
        }

    }
}
