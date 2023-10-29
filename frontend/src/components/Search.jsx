import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {

    const dispatch=useDispatch()
  const { allUser, blog } = useSelector((state) => state.home)
  
  const [searchQuery, setSearchQuery] = useState(''); // Store the search query
  const [searchResults, setSearchResults] = useState([]); // Store the search results

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      searchBlogs();
    }
  }

  const searchBlogs = () => {
    const results = allUser.filter(user =>
      user.blogs.some(blog => blog.heading.includes(searchQuery))
    );
    setSearchResults(results);
    console.log(results)
  }
  

  return (
    <>
   <TextField
      placeholder="Search..."
      variant="outlined"
      size="small"
      value={searchQuery}
    onChange={handleSearch}
      onclick={handleSearchEnter}
    />


    </>
  )
}

export default Search