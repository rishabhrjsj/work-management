"use client";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import getTaskById from "../services/userTask";
import TaskCard from "./TaskCard";

const ShowTask = () => {
  const context = useContext(UserContext);
  console.log("context", context);
  const [tasks, setTask] = useState([]);
  async function loadTasks(userId) {
    try {
      const tasks = await getTaskById(userId); // ✅ wait for the response
      setTask(tasks); // ✅ no need to spread, already an array
    } catch (error) {
      console.log("Error loading tasks:", error);
    }
  }
  useEffect(() => {
    if (context.user?._id) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <div className="container grid mt-3">
      <div>
        <h1 className="text-2xl, text-center">Your Tasks</h1>
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default ShowTask;
