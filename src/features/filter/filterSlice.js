import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
};


export const filterSlice = createSlice({

        name:"filter",
        initialState,
        reducers:{
            addFilter:(state,action)=>{
                    if(!state.data.includes(action.payload))
                    {
                        state.data.push(action.payload);
                    }
                  
            },
            removeFilter:(state,action)=>{
                state.data.pop(action.payload);
            },
            removeAll:(state)=>{
                state.data = [];
            }
        }

});

export const {addFilter,removeFilter,removeAll} = filterSlice.actions;

export default filterSlice.reducer;