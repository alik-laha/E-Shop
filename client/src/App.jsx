import Nav from "./component/navbar/Nav";
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Body from "./component/body/Body.jsx";
import {useEffect, useState} from "react";
 function App() {
     const [data, setData] = useState([]);
     const[currentpage,setCurrenpage]=useState(1);
     const[postPerPage,setPostPerPage]=useState(12)
     useEffect( ()=>{
         async function fetchData(){
         await fetch("http://localhost:3000/api/products",{
         })
             .then(res=>res.json())
             .then(json=>setData(json))
         }
         fetchData()
     },[])
     const lastPostIndex=currentpage*postPerPage
     const firstPostIndex=lastPostIndex-postPerPage
       const item = data.slice(firstPostIndex,lastPostIndex)
     const NextPage=(pagedata)=>{
         setCurrenpage(pagedata)
     }
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Nav/><Body data={item} page={currentpage} all={data} NextPage={NextPage}/></> } />
                <Route path='/cart' element={<><Nav/><h2>cart</h2> </>} />
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;