import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function addTodo() {
    if (newTodo.trim()) {
      setTodo((prev) => [...prev, newTodo]);
      setnewTodo("");
    }
  }

  function deleteTodo(index) {
    setTodo((prev) => prev.filter((element, i) => i !== index));
  }

  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center bg-slate-100 p-6">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
          React Todo App
        </h1>

        {/* Input Field */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 bg-white p-8 rounded-md shadow-md"
        >
          <div className="flex items-center gap-4">
            <label className="text-lg font-semibold" htmlFor="todoInput">
              Add New Todo:
            </label>
            <input
              id="todoInput"
              className="border border-gray-300 rounded-md shadow-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              value={newTodo}
              placeholder="Enter a todo..."
              onChange={(e) => setnewTodo(e.target.value)}
            />
            <button
              onClick={addTodo}
              className="border-2 border-black bg-blue-500 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-600 hover:scale-105 transition"
            >
              Add
            </button>
          </div>
        </form>

        {/* Todo List */}
        <ol className="mt-8 w-full max-w-lg space-y-4">
          {todo.length > 0 ? (
            todo.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-md shadow-md border border-gray-200"
              >
                <span className="text-lg font-medium text-gray-800">
                  {task}
                </span>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 rounded-md px-4 py-1 border-2 border-black text-white font-bold text-sm hover:bg-red-600 hover:scale-105 transition"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 font-medium">
              No todos yet. Add one above!
            </p>
          )}
        </ol>
      </div>
    </>
  );
}
