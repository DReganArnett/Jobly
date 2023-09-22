import React from "react";
import CompanyJobCard from "./CompanyJobCard";

const CompanyJobCardList = ({jobs, apply}) => {
    return ( 
        <div className="CompanyJobCardList">
            {jobs.map(job => (
                <CompanyJobCard 
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            ))}
        </div>
    );
} 

export default CompanyJobCardList;