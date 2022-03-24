import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Mapdata from './Components/Mapdata';
import UpperData from './Components/UpperData';
import Pagination from './Components/Pagination';
import SearchProduct from './Components/SearchProduct'

const App = () => {
  const [Item,setItem]=useState([])
  const [loding,setLoding]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage]=useState(3);


  useEffect(() => {
   const FechedData = async ()=>{
    setLoding(true);
   const Responce = await axios.post('https://test.sunnybee.in/products/productList')
    setItem(Responce.data.data.result_set)
    setLoding(false);
  }
  FechedData();
}, []);

const lastPost = currentPage* postPerPage;
const firstPost = lastPost - postPerPage
const currentPost = Item.slice(firstPost,lastPost)

const ChangePage = (pagenumber) =>{
  setCurrentPage (pagenumber)
}
  return (
    <div>
<SearchProduct/>

<UpperData />
<Mapdata Item={currentPost} loding={loding} />
<Pagination 
postPerPage={postPerPage}
totalPost={Item.length}
ChangePage={ChangePage}/>
    </div>
  )
}

export default App
