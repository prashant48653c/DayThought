import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../Slices/resultSlicer';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  const navigate = useNavigate()
  const { result } = useSelector((state) => state.result);

  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.home);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.key === 'Enter') {
      console.log("clicked enter")
      searchBlogs();
    }
  }
 

  const searchBlogs = async () => {
    const results = await allUser.data.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(setResult(results))
    
      navigate('/search');
    

  }

  return (
    <>
      <TextField
        
        placeholder="Search user"
        variant="outlined"
        size="small"
        onChange={handleSearch}
        onKeyDown={handleSearch}  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />


    </>
  );
}

export default Search;
