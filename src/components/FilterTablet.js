import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFilter,removeAll } from '../features/filter/filterSlice';
import "../styles/Filtertablet.css";
const FilterTablet = () => {

        const data = useSelector((state)=>state.filter.data);
        const dispatch = useDispatch();
        const removeFilterHandler =(e) =>{
                dispatch(removeFilter(e.target.innerText));
        };
        const clearAllHandler =()=>{

                dispatch(removeAll());
        };
    return (
        <div className="filter_container">

        <div class="filter_data">
                {
                data.map((oneJob)=>
                <>
                <p onClick={removeFilterHandler}>{oneJob}</p><ion-icon name="close-outline" ></ion-icon>
                </>
                )
              
            }
        </div>
            <div class="clear_button">
                    <span className="clear_text" onClick={clearAllHandler}>Clear</span>
            </div>
        </div>
    )
}

export default FilterTablet
