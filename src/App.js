import "./App.css"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";

function App() {

  return (
    <div className="app">

   <div >
      <h1>TODO list</h1>
   </div>

   <TodoProvider>
    <TodoForm/>
    <TodoList/>
   </TodoProvider>

   </div>
  )
}

export default App;