import {createSlice,nanoid} from "@reduxjs/toolkit"

let initialState = {
    todos:[{id:1,text:"Hello world"}]
}

export let todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
          state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
}) 

export let {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer