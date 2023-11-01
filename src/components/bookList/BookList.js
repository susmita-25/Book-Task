import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterRows, handleEditClick, numberComparator } from '../bookHelper';
import { allBookList, pagination, setEditedBookData, setPaginationData, userEditBookData, userSearchQuery } from './bookListSlice';
import './style.css';


const BookList = () => {
  const dispatch = useDispatch()
  const editBookData = useSelector(userEditBookData);
  const bookData = useSelector(allBookList)
  const searchQuery = useSelector(userSearchQuery);
  const paginationData = useSelector(pagination)
  
  const pageSizeChange=(newPageSize)=>{
    alert(newPageSize)
            dispatch(paginationData({
              ...paginationData,pageSize: newPageSize
          }))
  }
  

  const columns = [
    { field: 'author', headerName: 'Author', width: 150, editable: true },
    { field: 'country', headerName: 'Country', width: 150, editable: true },
    { field: 'language', headerName: 'Language', width: 150, editable: true },
    { field: 'link', headerName: 'Link', width: 150, editable: true },
    { field: 'pages', headerName: 'Pages', width: 150, editable: true, sortComparator: numberComparator, },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'year', headerName: 'Year', width: 150, editable: true, sortComparator: numberComparator, },
    {
      field: 'edit',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Button onClick={() => handleEditClick(params, dispatch)}>Edit</Button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>

      {bookData && (
        <DataGrid
          rows={bookData}
          columns={columns}
          pagination
          rowCount={paginationData.totalElements}
          pageSize={paginationData.pageSize}
          paginationMode="server"
          initialState={{
            ...bookData,
            pagination: { paginationModel: { pageSize: paginationData.pageSize, page: 0 } },
          }}
          // paginationMode="server"
          // onPageSizeChange={(newPageSize) => pageSizeChange(newPageSize)}
          onPageChange={(newPage) => {
            // Update the currentPage in the state
            alert(newPage+1)
            console.log(paginationData)
          }}
          
          // pageSizeOptions={[5, 10, 15, 20, 25]}
          onEditCellChange={(params) => {
            if (params.id === editBookData?.id) {
              dispatch(setEditedBookData((prevData) => ({
                ...prevData,
                [params.field]: params.props.value,
              })));
            }
          }}
        />
      )}

    </div>
  );
};

export default BookList;
