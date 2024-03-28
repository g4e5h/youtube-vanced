import {createSlice} from '@reduxjs/toolkit'

const appSlice= createSlice({
                name:"app",
                initialState:{
                    isSidebarOpen:true,
                },
                reducers:{
                    toggleMenu: (state, action)=>{
                        state.isSidebarOpen = !state.isSidebarOpen;
                    },
                    closeMenu: (state, action)=>{
                        state.isSidebarOpen = false;
                    },
                    openMenu: (state, action)=>{
                        state.isSidebarOpen = true;
                    }
                }
}
);

export default appSlice.reducer;

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
