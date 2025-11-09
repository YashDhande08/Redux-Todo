// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./AddTodoSlice";
// import { RemoveTodo } from "./RemoveTodo";


// export function AddTodo({ lightMode }) {
//   const [input, setInput] = React.useState("");
//   const todos = useSelector((state) => state.todos.todos);
//   const dispatch = useDispatch();

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       dispatch(addTodo(input));
//       setInput("");
//     }
//   };

//   return (
//     <div className="w-full flex items-center justify-center">
//       <div className="flex flex-col gap-4 items-center">
//         <div className="flex flex-row gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter todo"
//             className="border p-2 rounded"
//           />
//           <button
//             onClick={handleAddTodo}
//             className= {`${lightMode? "text-white bg-blue-500 ":"text-black bg-blue-500 "}"text-white px-4 py-2 rounded"`}
//           >
//             Add
//           </button>
//         </div>

//         {todos.length > 0 ? (
//           <ul>
//             {todos.map((todo, index) => (
//               <li key={index} className="flex flex-row gap-2 items-center">
//                 {todo}
//                 <RemoveTodo index={index} />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className={lightMode ? "text-white" : "text-black"}>
//             No todos available
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./AddTodoSlice";
import { RemoveTodo } from "./RemoveTodo";

export function AddTodo({ lightMode }) {
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
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-2">

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo"
            className={`${lightMode ? "bg-white text-black" : "bg-gray-800 text-white"} border p-2 rounded`}
          />

          <button
            onClick={handleAddTodo}
            className={`${lightMode ? "bg-blue-500 text-white" : "bg-blue-400 text-black"} px-4 py-2 rounded`}
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
          <p className={lightMode ? "text-black" : "text-white"}>
  No todos available
</p>
        )}
      </div>
    </div>
  );
}
