import { createSlice } from "@reduxjs/toolkit";
import IPaginationData from "../../interface/PaginationData";
import("../../interface/IRow")


const initialState = {
    bookData:[],
    selectedRow: {
        "author": "",
        "country": "",
        "language": "",
        "link": "",
        "pages": "",
        "title": "",
        "year": "",
    },
    editedBookData:{
        "author": "",
        "country": "",
        "language": "",
        "link": "",
        "pages": "",
        "title": "",
        "year": "",
    },
    paginationData:{
        "sortDirection": "DESC",
        "totalPages": 0,
        "pageSize": 25,
        "currentPage": 0,
        "totalElements": 25
      },
    open:false,
    isSaved:false,
    searchQuery:"",
};

const bookListSlice = createSlice({
    name:'bookList',
    initialState,
    reducers:{
        setBookData(state,action:PayloadAction<IRow[]>){
            state.bookData = [...action.payload]
        },
        setSelectedRow(state,action:PayloadAction<IRow>){
            state.selectedRow = action.payload
        },
        setEditedBookData(state,action:PayloadAction<IRow>){
            state.editedBookData = action.payload
        },
        setOpen(state,action:PayloadAction<Boolean>){
            state.open = action.payload
        },
        setIsSaved(state,action:PayloadAction<Boolean>){
            state.isSaved = action.payload
        },
        setSearchQuery(state,action:PayloadAction<String>){
            state.searchQuery = action.payload
        },
        setPaginationData(state,action:PayloadAction<IPaginationData>){
            state.paginationData = action.payload
        }
    }
})

export const allBookList = (state)=>state.bookList.bookData
export const userSelectedRow = (state)=>state.bookList.selectedRow
export const userEditBookData = (state)=>state.bookList.editedBookData
export const modalActionData = (state)=>state.bookList.open
export const isBookSaved = (state)=>state.bookList.isSaved
export const userSearchQuery=(state)=>state.bookList.searchQuery
export const pagination = (state)=> state.bookList.paginationData

export const {setBookData,setSelectedRow,setEditedBookData,setOpen,setIsSaved,setSearchQuery,setPaginationData} = bookListSlice.actions

export default bookListSlice.reducer;