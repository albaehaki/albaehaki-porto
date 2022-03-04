import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface DarkState {
    value: boolean;
}

const initialState: DarkState = {
    value: false,
}

export const DarkSlice = createSlice({
    name: 'dark',
    initialState,
    reducers:{
        DarkModeOn: (state) => {
            state.value = !state.value;
        }
    }
})

export const { DarkModeOn } =DarkSlice.actions;

export const selectDark = (state: RootState) => state.darkmode.value;

export default DarkSlice.reducer;