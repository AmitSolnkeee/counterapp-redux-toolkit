import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseAmount/counter');

//Reducer
const initialState ={
    value : 0 ,
}

export const counterSlice = createReducer(initialState , (builder) =>{
    builder.addCase(increment , (state,action)=>{
        state.value++;
    }) ;
    
    builder.addCase(decrement, (state,action) => {
        state.value-- ;
    });
    builder.addCase(increaseAmount , (state,action) =>{
        state.value += action.payload ;
    })
})
