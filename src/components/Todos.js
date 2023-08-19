import { useDispatch, useSelector } from "react-redux";
import {
  Remove_Todo,
  Mark_Todo_Completed,
  Clear_Todos,
} from "../redux/actions/TodosActions";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Todos = () => {
  const todos = useSelector((state) => state.Todos);
  const filter = useSelector((state) => state.VisibilityFilter);
  const dispatch = useDispatch();

  const visibleTodos = (todos, filter) => {
    switch (filter) {
      case "View_All":
        return todos;
      case "View_Completed":
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  };

  return (
    <section className="p-4 mb-5">
      {visibleTodos(todos, filter).map((todo, index) => (
        <div
          className="row p-2"
          style={{
            backgroundColor: "#606870",
            borderBottom: "1px solid white",
          }}
          key={todo.id}
        >
          <div className="col-8">
            <h5
              style={{
                textDecoration:
                  todo.completed === true
                    ? "line-through solid #4caf50 4px"
                    : "none",
              }}
            >
              {index + 1}. {todo.todo}{" "}
            </h5>
            <p className="fs-6 " style={{ color: "#bdbdbd" }}>
              {todo.description}{" "}
            </p>
          </div>
          <div className="col-4 d-flex align-self-center justify-content-end">
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => dispatch(Remove_Todo(todo.id))}
            >
              <DeleteIcon fontSize="inherit" className="text-danger" />
            </IconButton>
            <IconButton
              size="medium"
              onClick={() => dispatch(Mark_Todo_Completed(todo.id))}
            >
              <DoneOutlineIcon
                fontSize="inherit"
                style={{ color: "#4caf50" }}
              />
            </IconButton>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center mt-4">
        <Button
          style={{
            color: "white",
            display: todos.length === 0 ? "none" : "",
          }}
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(Clear_Todos());
          }}
        >
          {" "}
          Delete All{" "}
        </Button>
      </div>
    </section>
  );
};

export default Todos;
