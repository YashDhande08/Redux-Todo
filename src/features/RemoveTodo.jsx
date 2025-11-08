import { useDispatch } from "react-redux";
import { removeTodo } from "./AddTodoSlice";
import { EditTodo } from "./EditTodo";


export function RemoveTodo({ index }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="ml-2 text-red-500"
        onClick={() => dispatch(removeTodo(index))}
      >
        Remove
      </button>
      <EditTodo index={index} />
    </>
  );
}
