import { useContext,createContext } from "react";

export let TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed:false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export let useTodo = ()=>{
    return useContext(TodoContext)
}

export let Todoprovider = TodoContext.Provider