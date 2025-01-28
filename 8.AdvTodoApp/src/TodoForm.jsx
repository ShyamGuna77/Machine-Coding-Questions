import  { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white space-y-6 p-8 rounded-md shadow-md mt-8"
    >
      <div className="font-bold text-2xl">Today🌤️</div>
      <div>
        <label className="text-xl text-gray-500 font-mono font-semibold">
          Enter Your Todo:
        </label>
        <input
          type="text"
          placeholder="Add Todo:"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border-2 border-gray-200 shadow-sm p-2 w-64 m-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        <button
          type="submit"
          className="font-semibold bg-blue-500 rounded-md text-white px-4 py-2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
