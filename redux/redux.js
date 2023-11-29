import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlices = createSlice({
    name:"todo",
    initialState:[
        {text:'Buy a new coffee', key: 1},
        {text:'Buy milk', key: 2},
        {text:'Create react native app', key: 3},
        {text:'Create node app', key: 4},
        {text:'Create react app', key: 5},
        {text:'Create angular app', key: 6},
        {text:'Create spring boot app', key: 7},
        {text:'Create next app', key: 8},
        {text:'Create grails app', key: 9},
        {text:'Create vue app', key: 10},
        {text:'Getting start on docker', key: 11},
        {text:'Getting start on jenkins', key: 12}
    ],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {text:action.payload, key: Math.random}
            return state.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            return state.filter(todo => todo.key !== action.payload);
        }
    }
})

export const {addTodo,deleteTodo} = todoSlices.actions;

export const store = configureStore({
    reducer:{
        todo: todoSlices.reducer
    }
})

