import { useDispatch } from "react-redux";
import { editTodo } from "./AddTodoSlice";
import React from "react";

export function EditTodo({ index }) {
  const dispatch = useDispatch();
  const [newText, setNewText] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo({ index, newText }));
      setNewText("");
    }
  };

  return (
    <>
      {isEditing ? (
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="New todo text"
            className="border p-2 rounded "
          />
          <button
            onClick={() => {
              handleEdit();
              setIsEditing(false);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"  
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
      )}
    </>
  );
}
