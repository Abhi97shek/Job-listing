import React from 'react';
import "../styles/JobItems.css";
const JobItems = ({company,logo,position,postedAt,contract,location,role,level,languages}) => {
    return (
        <div className="job_items">
               <img src={logo} alt="company_logo" className="logo"/>
                <div className="company_details">
                    <div className="upper_details">
                        <h2 className="company_name">{company}</h2>
                        <p className="new">New!</p>
                        <p className="featured">Featured</p>
                    </div>
                    <h1 className="position">{position}</h1>
                    <div class="days">
                        <p>{postedAt}</p><span>.</span>
                        <p>{contract}</p>.
                        <p>{location}</p>
                    </div>
                </div>
                <div className="role_languages">
                        <p>{role}</p>
                        <p>{level}</p>
                        {languages.map(language => (
                            <p>{language}</p>
                        ))}
                </div>
       </div>
    )
}

export default JobItems
