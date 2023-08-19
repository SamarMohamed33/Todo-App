import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Add_Todo } from "../redux/actions/TodosActions";
import { VisibilityFilter } from "../redux/actions/VisibilityFilterAction";
import { useState } from "react";
const AddTodo = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.VisibilityFilter);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (event) => {
    if (task.length < 2) {
      event.preventDefault();
    } else {
      const todo = {
        id: Date.now(),
        todo: task,
        description: description,
        completed: false,
      };
      dispatch(Add_Todo(todo));
      setTask("");
      setDescription("");
    }
  };
  return (
    <section className="p-4">
      <div className="row justify-content-center justify-content-md-between m-auto">
        <TextField
          id="filled-basic"
          label="To Do"
          variant="filled"
          className="col-12 col-md-5 bg-white"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          className="col-12 col-md-5 bg-white mt-2 mt-md-0"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          className="col-8 col-md-1 mt-2 mt-md-0"
          color="secondary"
          onClick={addTask}
        >
          {" "}
          Add
        </Button>
      </div>
      <hr />
      <div>
        <Button
          variant="contained"
          style={{ borderRadius: "0" }}
          color={filter === "View_All" ? "secondary" : "notActive"}
          onClick={() => {
            dispatch(VisibilityFilter("View_All"));
          }}
        >
          {" "}
          All
        </Button>
        <Button
          variant="contained"
          style={{ borderRadius: "0" }}
          color={filter === "View_Completed" ? "secondary" : "notActive"}
          onClick={() => {
            dispatch(VisibilityFilter("View_Completed"));
          }}
        >
          {" "}
          Completed
        </Button>
      </div>
    </section>
  );
};
export default AddTodo;
