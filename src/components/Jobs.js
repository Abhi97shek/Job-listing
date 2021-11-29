import React,{useEffect,useState} from 'react';
import '../styles/Jobs.css';
import JobItems from './JobItems';
/* eslint-disable */
const Jobs = () => {

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
                setJobs(data);
            }).catch(err=>{
                console.log(err);
            })
        
    },[]);

    console.log(jobs.length);
    return (
        <div className="jobs_container">
            {
                jobs.map(({id,company,logo,featured,position,role,level,postedAt,contract,location,languages,tool})=> (
                    <JobItems key={id} company={company} logo={logo} position={position} role={role} level={level} postedAt={postedAt} contract={contract} location={location} languages={languages} tool={tool} />
                ))
            }
               
            
        </div>
    )
}

export default Jobs
