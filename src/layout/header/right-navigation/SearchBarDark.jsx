import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBarDark({ search }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '35ch',
          backgroundColor: '#333',  
          borderRadius: '50px',
          color: '#fff',  
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Search"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            backgroundColor: '#333', 
            color: '#fff', 
            '& fieldset': {
              borderColor: '#555',  
            },
            '&:hover fieldset': {
              borderColor: '#777', 
            },
            '&.Mui-focused fieldset': {
              borderColor: '#bbb',  
            },
          },
          '& .MuiInputLabel-root': {
            color: '#bbb',  
          },
          '& .MuiInputAdornment-root svg': {
            color: '#bbb',  
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        
      />
    </Box>
  );
}
