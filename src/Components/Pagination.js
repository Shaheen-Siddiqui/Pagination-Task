import React,{useState} from 'react';

const Pagination = ({postPerPage,totalPost,ChangePage,}) => {
  
  const [count,setCount]=useState(1)
    
  let PageNumber = [];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        PageNumber.push(i);
    }
    return(<>

    <div className="navigate">

  {PageNumber.map((numbers)=>{
    return (
     <ul className="navigation">
        <button onClick={()=> ChangePage(numbers)} className="btn btn-primary">{numbers} </button>
     </ul>
            )})
  }
    </div>

</>)

}

export default Pagination;

