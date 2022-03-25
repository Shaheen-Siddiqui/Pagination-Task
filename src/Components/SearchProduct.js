import React from 'react'

const SearchProduct = ({searcHendler,searchTerm }) => {
const getSearchTerm = (event)=>{
  let value = event.target.value;
  searcHendler(value)
}

  return (
    <div>
      <input type="text" placeholder="Search..."
      value={searchTerm}
       onChange={getSearchTerm} />
    </div>
  )
}

export default SearchProduct
 