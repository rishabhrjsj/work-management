"use client";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import getTaskById from "../services/userTask";
import TaskCard from "./TaskCard";
import deleteTaskById from "../services/deleteTaskService";

const ShowTask = () => {
  const context = useContext(UserContext);
  const [tasks, setTask] = useState([]);

  // ✅ Fetch all tasks
  async function loadTasks(userId) {
    try {
      const data = await getTaskById(userId);
      setTask(data);
    } catch (error) {
      console.log("Error loading tasks:", error);
    }
  }

  // ✅ Load tasks on first render
  useEffect(() => {
    if (context.user?._id) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  // ✅ Handle deletion
  const deleteTaskInParent = async (taskId) => {
    try {
      const res = await deleteTaskById(taskId);
      const updated = tasks.filter((task) => task._id !== taskId);
      setTask(updated);
    } catch (error) {
      console.log("Error in showtask delete func", error);
      alert("Failed to delete task");
    }
  };

  return (
    <div className="container grid mt-3">
      <h1 className="text-2xl text-center">Your Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            deleteTaskInParent={deleteTaskInParent}
          />
        ))
      )}
    </div>
  );
};

export default ShowTask;
