import React from "react";
import {Routes,Route} from "react-router-dom";
import Women from "./Women.jsx";
import Men  from './Men.jsx';
import Child from "./Child.jsx"; 
import KidsData from "./AllKidsData.jsx";
import DataOfWomen from "./AllWomensData.jsx";
import DataOfMen from "./AllMenData.jsx";

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/child'  element={ <Child/> }></Route>
        <Route path='/child/AllKidsData'  element={ <KidsData/> }></Route>
        <Route path='/women/AllWomensData'  element={ <DataOfWomen/>}></Route>
        <Route path='/men/AllMenData'  element={ <DataOfMen/>}></Route>
       
      </Routes>
    
    )
};
export default AllRoutes;
