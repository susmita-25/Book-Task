import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from '../components/bookList/bookListSlice';

export const store = configureStore({
    reducer:{
        bookList: bookListReducer
    }
})