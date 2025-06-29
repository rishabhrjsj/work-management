import { Task } from "@/models/task";
import { NextResponse } from "next/server";
const { DbConnection } = require("@/app/helper/db");
DbConnection();

//get task by id
export async function GET(request, { params }) {
  const taskId = params.id;

  try {
    const task = await Task.findById(taskId);
    console.log(`task send ${task}`);
    return NextResponse.json({
      task: task,
      message: "task send",
    });
  } catch (error) {
    console.log(`cant send task`);
    return NextResponse.json(
      {
        message: "Failed to sent  task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//delete task

export async function DELETE(request, { params }) {
  const taskId = params.id;
  try {
    const task = await Task.findByIdAndDelete(taskId);
    console.log(`task deleted ${task}`);
    return NextResponse.json({
      task: task,
      message: "task deleted",
    });
  } catch (error) {
    console.log(`cant delete task`);
    return NextResponse.json(
      {
        message: "Failed to delete  task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//update task
export async function PUT(request, { params }) {
  const taskId = params.id;
  console.log("Task ID:", taskId);

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { taskStatus: true },
      { new: true }
    );

    console.log(`Task status updated: ${updatedTask}`);

    return NextResponse.json(
      {
        task: updatedTask,
        message: "Task status updated",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Can't update task`, error);
    return NextResponse.json(
      {
        message: "Failed to update task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
