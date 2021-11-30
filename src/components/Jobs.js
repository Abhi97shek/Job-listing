import React,{useEffect,useState} from 'react';
import '../styles/Jobs.css';
import {useSelector} from "react-redux";
import JobItems from './JobItems';
/* eslint-disable */
const Jobs = () => {

    const  filterList = useSelector((state)=> state.filter.data);

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{

            fetch("data.json",{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            }).then(response=>{
                return response.json();
            }).then(data=>{
            
                if(filterList.length === 0)
                {
                    
                    setJobs(data);
                    return;
                   
                }

                // let combineTools = data.map((check)=>{
                //        return  [check.role,check.level,...check.languages,...check.tools]
                // });
                // console.log(combineTools);
                const newArray = data.filter(check=>{

                        return (
                                filterList.every(key=>{

                                    return (
                                        check.role === key || check.level === key || check.languages.includes(key) || check.tools.includes(key)
                                    )
                                })
                        )}
                )
                setJobs(newArray);
                

            //    const newArray=data.filter((one)=>
            //     {
            //                 let cT = [one.role,one.level,...one.languages,...one.tools];
            //                 console.log(cT);
            //             return cT.filter(check=>chec);
                            
                    
            //     }                
            //         );
            //      
            }).catch(err=>{
                console.log(err);
            })
        
    },[filterList]);
    return (
        <div className="jobs_container">
         
         
            {   
                 jobs.map(({id,company,logo,featured,news,position,role,level,postedAt,contract,location,languages,tools})=> (
                    <JobItems key={id} company={company} featured={featured} news={news}logo={logo} position={position} role={role} level={level} postedAt={postedAt} contract={contract} location={location} languages={[role,level,...languages,...tools]} />
                ))
            
            }
               
            
        </div>
    )
}

export default Jobs
