import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/Filtertablet.css";
const FilterTablet = () => {

        const data = useSelector((state)=>state.filter.data);

        console.log(data);
    return (
        <div className="filter_container">
                <p>{data[0]}</p><ion-icon name="close-outline"></ion-icon>
                

                 
                {/* {data.map(res=>{
                        
                        <p>{res}<ion-icon name="close-outline"></ion-icon></p>

                })}  */}
            
            
        </div>
    )
}

export default FilterTablet
