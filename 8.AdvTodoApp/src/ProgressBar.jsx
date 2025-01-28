
import { useTodo } from "./TodoContext";

const ProgressBar = () => {
  const { state } = useTodo();
  const { todos } = state;

  // Calculate completed and total tasks
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="w-full max-w-lg mt-4">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold">
          {completedTasks} of {totalTasks} tasks completed
        </span>
        <span className="text-lg font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
