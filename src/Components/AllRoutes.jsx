import React from "react";
import {Routes,Route} from "react-router-dom";
import Women from "./Women.jsx";
import Men  from './Men.jsx';
import Child from "./Child.jsx"; 


const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/child'  element={ <Child/> }></Route>
      </Routes>
    
    )
};
export default AllRoutes;
