
import { useTodo } from "./TodoContext";

const FilterButtons = () => {
  const { dispatch } = useTodo();

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Completed
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "incomplete" })}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;
