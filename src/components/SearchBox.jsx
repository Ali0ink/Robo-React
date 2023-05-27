import React from 'react'

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    <div className='bg-green-400 p-3  flex items-center justify-center'>
        <input className='bg-blue-100 rounded-lg border-blue-400 border-4 p-3 items-center justify-center'
        onChange={searchChange} 
        type='search' 
        placeholder='search robots' />
    </div>
  )
}

export default SearchBox