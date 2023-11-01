import { Grid } from "@mui/material";
import "./App.css";
import BookList from "./components/bookList/BookList";
import SearchBook from "./components/searchBook/SearchBook";
import React from "react";
import AddBook from "./components/addBook/addBook";

function App() {
  return (
    <React.Fragment>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <SearchBook />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <AddBook />
        </Grid>

        <Grid item xs={12}>
          <BookList />
        </Grid>

      </Grid>

    </React.Fragment>
  );
}

export default App;
