import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        recommended: [],
        actionMov: [],
        horror: [],
        upcoming: []
    },
    reducers:{
        setMovies: (state,action)=>{
            state.recommended = action.payload.recommended
            state.actionMov = action.payload.actionMov
            state.horror = action.payload.horror
            state.upcoming = action.payload.upcoming
        }
    }
})

export const {setMovies} = movieSlice.actions

export default movieSlice.reducer