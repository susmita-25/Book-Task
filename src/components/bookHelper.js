import { axiosInstance } from "../utils/interceptor"
import { setBookData, setEditedBookData, setIsSaved, setOpen, setPaginationData, setSelectedRow } from "./bookList/bookListSlice"

// Get book data 
const getBookData = (searchQuery, sortDirection, dispatch, page) => {
  axiosInstance.get("books", {
    params: {
      title: searchQuery,  // Use current page size
      DIR: sortDirection,  // Include sorting direction if needed
      page: page
    }
  }).then((res) => {
    console.log(res.data)
    dispatch(setBookData(res.data.data))
    dispatch(setPaginationData(res.data.pagination))
  })
}

// Edit row record
const handleEditClick = (params, dispatch) => {
  dispatch(setEditedBookData(params.row))
  dispatch(setOpen(true))
};

//Close modal
const handleClose = (dispatch) => {
  dispatch(setOpen(false));
  // setSelectedRow(null);
  dispatch(setSelectedRow(null))
};

//Custom number sorting comparator
const numberComparator = (v1, v2) => parseInt(v1) - parseInt(v2);

//Filter the row
const filterRows = (searchQuery, bookData) => {
  if (searchQuery) {
    const filteredRows = bookData.filter((row) => {
      return (
        row.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    return filteredRows;
  } else {
    return bookData;
  }
};

//Add new book
const handleAddBook = (dispatch) => {
  dispatch(setEditedBookData({
    "author": "",
    "country": "",
    "language": "",
    "link": "",
    "pages": "",
    "title": "",
    "year": ""
  }))

  dispatch(setOpen(true))
  dispatch(setIsSaved(false))
}

// Handle save book
const handleSaveBook = (dispatch, editedBookData) => {
  if (editedBookData
    .id) {
    axiosInstance.put(`books/${editedBookData
      .id}`, editedBookData
    ).then((res) => {
      console.log(res)

      dispatch(setSelectedRow(null))
      dispatch(setIsSaved(true))

    })
    // After saving, you can close the modal and clear the selectedRow
  } else {
    axiosInstance.post(`books`, editedBookData
    ).then((res) => {
      console.log(res)
      dispatch(setSelectedRow(null))
      dispatch(setIsSaved(true))
    })
  }
  setTimeout(() => {
    dispatch(setOpen(false));
    dispatch(setIsSaved(false))
  }, 500)
  getBookData('', "ASC", dispatch, 1)
  window.location.reload();
};

//Search record
const searchBook = (searchQuery, sortDirection, dispatch) => {
  getBookData(searchQuery, sortDirection, dispatch, 1)
}

export { getBookData, handleEditClick, handleClose, numberComparator, filterRows, handleAddBook, handleSaveBook, searchBook }