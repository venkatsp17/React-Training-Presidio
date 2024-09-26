import { createSlice} from '@reduxjs/toolkit';


interface SidebarNumber {
    iconNumber: number
}

const initialState: SidebarNumber = {
    iconNumber: 1
};


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.iconNumber = action.payload;
          },
    }
   
});

export const { changePage } = sidebarSlice.actions

export default sidebarSlice.reducer;
