import {createSlice} from "@reduxjs/toolkit"
import wordList from "../words.json"
let randomNum = Math.floor(Math.random() * wordList.words.length)

const initialState = {
    board:["", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""],
    pos:0,
    row:0,
    correctWord: wordList.words[randomNum].toUpperCase()
}
export const boardSlice = createSlice({
    name:"board",
    initialState,
    reducers:{
        setBoard:(state,action) =>{
            state.board = action.payload
        },
        incrPos:(state) =>{
            state.pos++
        },
        decrPos:(state) =>{
            state.pos--
        },
        incrRow:(state) => {
            state.row++
        },
    }
})
export const {
    setBoard,
    incrPos,
    decrPos,
    incrRow,
    
} = boardSlice.actions

export default boardSlice.reducer;