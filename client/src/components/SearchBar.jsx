import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({width, setSearchText, searchText}) => {
  return (
    <div style={{display: 'flex', width: width}}>
        <FormControl fullWidth >
            <OutlinedInput
                size="small"
                id="outlined-adornment-amount"
                onChange={(e) => {setSearchText(e.target.value)}}
                startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                placeholder="Filter Notes list"
                style={{backgroundColor: 'white'}}
                value={searchText}
            />
        </FormControl>   
  </div> 
  )
}

export default SearchBar