
import { Alert, Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddBook, handleClose, handleSaveBook } from '../bookHelper';
import { isBookSaved, modalActionData, setEditedBookData, userEditBookData } from '../bookList/bookListSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddBook = () => {
    const dispatch = useDispatch();
    const openModal = useSelector(modalActionData)
    const editedBookData = useSelector(userEditBookData);
    // const [isSaved, setIsSaved] = useState(false);
    const isSaved = useSelector(isBookSaved)
       
    return (
        <div>
            <Button
                id="addBook"
                variant="contained"
                color="primary"
                onClick={()=>handleAddBook(dispatch)}
                style={{ margin: '10px' }}
            >
                Add to Books List
            </Button>

            <Modal
                keepMounted
                open={openModal}
                onClose={(e)=>handleClose(dispatch)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <h2>Book Details</h2>
                    <hr />
                    {isSaved && <Alert severity="success" color="info">
                        Book saved successfully
                    </Alert>}
                    <Grid container spacing={2} padding={2}>
                        {/* Render input fields for editing book data */}
                        {editedBookData && (
                            <>
                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="author"
                                            label="Author"
                                            value={editedBookData
                                                .author}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData,author: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="country"
                                            label="Country"
                                            value={editedBookData
                                                .country}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({...editedBookData,country: e.target.value,}))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="language"
                                            label="Language"
                                            value={editedBookData
                                                .language}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData
                                                    ,
                                                    language: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="link"
                                            label="Link"
                                            value={editedBookData
                                                .link}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData
                                                    ,
                                                    link: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="pages"
                                            label="Pages"
                                            value={editedBookData
                                                .pages}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData
                                                    ,
                                                    pages: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="title"
                                            label="Title"
                                            value={editedBookData
                                                .title}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData
                                                    ,
                                                    title: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h6" component="h2">
                                        <TextField
                                            id="year"
                                            label="Year"
                                            value={editedBookData
                                                .year}
                                            onChange={(e) =>
                                                dispatch(setEditedBookData({
                                                    ...editedBookData
                                                    ,
                                                    year: e.target.value,
                                                }))
                                            }
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}></Grid>
                                {/* Add similar fields for other properties */}
                                {/* ... */}
                                <Grid item xs={6}>
                                    <Button variant="contained" onClick={()=>handleSaveBook(dispatch,editedBookData)}>
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" onClick={(e)=>handleClose(dispatch)}>
                                        Cancel
                                    </Button>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default AddBook
