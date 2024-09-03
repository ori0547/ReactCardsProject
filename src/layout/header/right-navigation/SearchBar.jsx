import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import useCards from '../../../cards/hooks/useCards';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar({ isDark }) {
    /*     const [inputValue, setInputValue] = useState(''); */
    const [searchParams, setSearch] = useSearchParams()
    const handleInputChange = (e) => {
        /*      setInputValue(e.target.value); */
        const value = e.target.value;
        setSearch({ q: value })
    };



    const boxStyle = isDark ? {
        '& > :not(style)': {
            m: 1,
            width: '35ch',
            backgroundColor: '#333',
            borderRadius: '50px',
            color: '#fff',
        },
    } : {
        '& > :not(style)': {
            m: 1,
            width: '35ch',
            backgroundColor: '#E4F2FD'
        },
    }
    const textFiledStyle = isDark ? {
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
    } : {
        borderRadius: '50px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
        },
    }
    return (
        <Box
            component="form"
            sx={boxStyle}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Search"
                id="outlined-size-small"
                size="small"
                value={searchParams.get("q") ?? ''}
                onChange={handleInputChange}
                sx={textFiledStyle}
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
