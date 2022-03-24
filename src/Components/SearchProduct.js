import React,{useState} from 'react'

const SearchProduct = () => {
    let [state,setState]=useState();
    let SelectData = (event) =>{
        setState(event.target.value)
    }
    let Submitted = (event) => {
        event.preventDefault();
        console.log(state);

    }

  return (
    <div>
      <form action="" onSubmit={Submitted}>
      <select value={state} className='SelectBox' onChange={SelectData}>
          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
      </select>

      <button>click Me </button>
      </form>
    </div>
  )
}

export default SearchProduct
