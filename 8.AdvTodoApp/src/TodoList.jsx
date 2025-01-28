
import { useTodo } from "./TodoContext";

const TodoList = () => {
  const { state, dispatch } = useTodo();
  const { todos, filter } = state;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; // "all"
  });

  return (
    <div className="w-full max-w-lg mt-8 space-y-3 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div
            className="flex justify-between items-center bg-white rounded-md shadow-md p-3 border border-gray-300"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="border-2 border-black mr-2"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id })
              }
            />
            <span
              className={`text-xl font-mono break-words ${
                todo.completed
                  ? "line-through text-green-700  font-mono"
                  : "text-gray-800"
              }`}
              style={{ wordBreak: "break-word", maxWidth: "70%" }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
              className="bg-red-500 rounded-md px-4 py-1 border-2 border-gray-700 text-white"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-3xl font-sans font-bold text-gray-500">
          No Todos Found
        </p>
      )}
    </div>
  );
};

export default TodoList;
