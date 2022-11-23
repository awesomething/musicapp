import React, {useState} from 'react'

function Searchbar(props) {
    let [searchTerm, setSearchTerm] = useState("")

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input id='search' className='input' type="text" placeholder="Search Songs or Artist" 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit" value='search' className='submit'/>
    </form>
  )
}

export default Searchbar