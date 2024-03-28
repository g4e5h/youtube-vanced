import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
        name:'search',
        initialState:{
            cache:{},
            searchValue:"",
        },
        reducers:{
            cacheResults:(state, action) =>{
                //state= {...state, ...action.payload};
                Object.assign(state.cache, action.payload);
            },
            updateSearchValue: (state, action) => {
                state.searchValue=action.payload;
            }
        }
});

export default searchSlice.reducer;

export const {cacheResults,updateSearchValue} = searchSlice.actions;