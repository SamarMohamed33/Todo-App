import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43484e",
    },
    secondary: {
      main: green[700],
    },
    notActive: {
      main: "#43484e",
    },
  },
});
function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <div className="container">
        <header className="text-center m-4">
          <h1>Todos</h1>
        </header>
        <AddTodo />
        <Todos />
      </div>
    </ThemeProvider>
  );
}

export default App;
