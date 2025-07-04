import React from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function TaskCard({ task, deleteTaskInParent }) {
  const handleClick = () => {
    deleteTaskInParent(task._id);
  };

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-md p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">{task.work}</h2>
        <RxCrossCircled
          onClick={handleClick}
          className=" hover:bg-gray-700 text-2xl rounded-full cursor-pointer"
        />
      </div>

      <p className="text-sm text-gray-300 mb-4">{task.description}</p>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            task.status === "completed"
              ? "bg-green-600 text-white"
              : "bg-yellow-600 text-white"
          }`}>
          {task.status}
        </span>
        <span className="text-xs text-gray-400">
          Task ID: {task._id.slice(-5)}
        </span>
      </div>
    </div>
  );
}
