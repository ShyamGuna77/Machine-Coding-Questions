
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { TodoProvider } from "./TodoContext";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <TodoProvider>
      <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-green-200 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[#79443B]">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl mr-2">
            Focus on
          </span>
          Today
        </h1>
        <TodoForm />
        <ProgressBar />
        <FilterButtons />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
