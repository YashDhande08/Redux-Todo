import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./AddTodoSlice";
import { RemoveTodo } from "./RemoveTodo";

export function AddTodo() {
  const [input, setInput] = React.useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo"
            className="border p-2 rounded bg-white"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex flex-row gap-2 items-center">
                {todo}
                <RemoveTodo index={index} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
}
