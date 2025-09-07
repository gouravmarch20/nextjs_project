import { useState, useEffect, useRef } from "react";
import { todoList } from "./todoConstant.js";
function App() {
  const [todos, setTodos] = useState(todoList);

  const [filterBy, setFilterBy] = useState({
    status: "",
  });

  const [addEditCase, setAddEditCase] = useState({
    id: "",
    title: "",
    show: false,
    status: "pending",
  });
  console.log("addEditCase", addEditCase);
  const handleDelete = (id) => {
    const newT = todos.filter((t) => t.id != id);
    setTodos(newT);
  };
  const handleEdit = (todo) => {
    setAddEditCase((prev) => ({ ...prev, ...todo, show: true }));
  };
  const handleAddEdit = () => {
    let newT = [];
    console.log("debug", addEditCase?.id);

    if (addEditCase?.id) {
      newT = todos.map((t) => (t.id === addEditCase?.id ? addEditCase : t));
    } else {
      const t = { ...addEditCase, id: Date.now() };
      newT = [...todos, t];
    }
    setTodos(newT);
    setAddEditCase({
      id: "",
      title: "",
      status: "pending",
    });

    handleFilter();
  };

  console.log("debug_4", addEditCase);
  const handleAdd = () => {
    setAddEditCase({
      id: "",
      title: "",
      show: true,
      status: "pending",
    });
  };

  const handleFilter = (status) => {
    setFilterBy((prev) => ({ ...prev, status: status }));
  };
  const getFilterTodo = (status) => {
    let tempT = [];
    if (status == "pending") {
      tempT = todos?.filter((t) => t.status === status);
    } else if (status == "completed") {
      tempT = todos?.filter((t) => t.status === status);
    } else {
      tempT = todos;
    }
    return tempT || [];
  };
  console.log("hit", getFilterTodo(filterBy?.status));
  const handleStatusChange = (e, todo) => {
    console.log("git", e.target.name);

    setTodos((prev) =>
      prev.map((t) =>
        t.id == todo.id
          ? {
              ...t,
              status: e.target.value,
            }
          : t
      )
    );
  };

  return (
    <main className=" ">
      <h1> Todo app </h1>
      <button className="border " onClick={handleAdd}>
        {" "}
        Add todo{" "}
      </button>

      <div className="mt-2">
        <button className="border " onClick={() => handleFilter("")}>
          {" "}
          All{" "}
        </button>

        <button className="border " onClick={() => handleFilter("pending")}>
          {" "}
          Pending{" "}
        </button>
        <button className="border " onClick={() => handleFilter("completed")}>
          {" "}
          Completed{" "}
        </button>
      </div>

      {getFilterTodo(filterBy?.status)?.map((todo) => (
        <div className="flex gap-4" key={todo.id}>
          <div> {todo.title} </div>

          <select
            name="status"
            value={todo.status}
            onChange={(e) => {
              handleStatusChange(e, todo);
            }}
          >
            <option value="pending"> Pending </option>
            <option value="completed"> Completed </option>
          </select>

          <div onClick={() => handleEdit(todo)}> Edit </div>
          <div onClick={() => handleDelete(todo.id)}> Delete </div>
        </div>
      ))}

      {addEditCase?.show && (
        <div className="absolute top-0 w-[100vw] bg-red-100 h-[100vh] flex justify-center items-center flex-col gap-4">
          <input
            className="border "
            placeholder="add "
            value={addEditCase?.title}
            onChange={(e) => {
              setAddEditCase((prev) => ({ ...prev, title: e.target.value }));
            }}
          />

          <select
            value={addEditCase.status}
            onChange={(e) => {
              setAddEditCase((prev) => ({ ...prev, status: e.target.value }));
            }}
          >
            <option value="pending"> Pending </option>
            <option value="completed"> Completed </option>
          </select>

          <button
            onClick={() =>
              setAddEditCase({
                id: "",
                title: "",
                show: false,
                status: "pending",
              })
            }
          >
            {" "}
            Discard
          </button>

          <button onClick={() => handleAddEdit()}>
            {" "}
            {addEditCase?.id ? "Edit" : "Add"}{" "}
          </button>
        </div>
      )}
    </main>
  );
}

export default App;


