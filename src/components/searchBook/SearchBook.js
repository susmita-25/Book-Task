
import React, { useEffect, useState } from 'react'
import { getBookData, searchBook } from '../bookHelper'
import { Button, Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import '../bookList/style.css'
import { setSearchQuery, userSearchQuery } from '../bookList/bookListSlice'

const SearchBook = () => {

  const dispatch = useDispatch();
  const searchQuery = useSelector(userSearchQuery);

  useEffect(() => {
    getBookData(searchQuery, "ASC", dispatch,1)
  }, [])

  return (
    <div>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
        <TextField
          label="Search Books By Title"
          variant="outlined"
          style={{ margin: '10px',width:'100%' }}
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
        <Button id="searchBtn" variant="contained" onClick={() => searchBook(searchQuery,"ASC",dispatch)}
            style={{top:'13px',width:'100px'}}>
          Search
        </Button>
        </Grid>
      </Grid>

    </div>
  )
}
export default SearchBook;
