import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Handle Add Task
  const addTask = () => {
    if (!task.trim() || !priority.trim()) {
      setError("Please enter both task and priority");
      return;
    }
    const newTask = { id: Date.now(), name: task, priority: Number(priority) };

    // Sort tasks by priority (ascending)
    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => a.priority - b.priority
    );

    setTasks(updatedTasks);
    setTask("");
    setPriority("");
    setError("");
  };

  // Handle Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Your Tasks</h1>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Priority (e.g., 1, 2, 3)"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <ul className="space-y-3">
        <AnimatePresence>
          {tasks.map((t) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow"
            >
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">Priority: {t.priority}</p>
              </div>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
