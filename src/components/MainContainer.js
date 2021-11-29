import React from 'react'
import "../styles/MainContainer.css";
import { useSelector } from 'react-redux';
import FilterTablet from './FilterTablet';
import Jobs from './Jobs';
const MainContainer = () => {

    const filterData = useSelector((state)=>state.filter.data);
    return (
       <main>   
           {filterData.length >0 && <FilterTablet />}
           <Jobs />
       </main>
    )
}

export default MainContainer
