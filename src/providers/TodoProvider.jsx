import { createContext, useContext, useState } from "react";

const TodoContext = createContext ();

const initialTodoListState = ["Learn React Context API"];

const TodoProvider = ({children}) => {

    const [todoList,setTodoList] = useState (initialTodoListState);

    const getNumberOfTodoItems = () => todoList.length

    const addTodo = (newTodoItem) => {
        setTodoList([...todoList,newTodoItem])
    }

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
        addTodo
    };

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
};

export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider;