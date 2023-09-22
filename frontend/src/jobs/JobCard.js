import React, { useContext, useState, useEffect } from "react";
import UserContext from "../users/UserContext";


const JobCard = ({id, title, salary, equity, companyName}) => {
    const {hasAppliedToJob, applyToJob, currentUser} = useContext(UserContext);
    const [applied, setApplied] = useState();
    
    const userAppliedJobs = currentUser.applications;

    useEffect(() => {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);


    async function handleApply(evt) {
        if(hasAppliedToJob(id)) return;
        applyToJob(id)
        setApplied(true); 
    }
    
    return (
        <div className="JobCard">
            <h3>{`${title}`}</h3>
            <p>Company: {`${companyName}`}</p>
            <p>Salary: ${`${formatSalary(salary)}`}</p>
            <p>Equity: {`${formatEquity(equity)}`}%</p>
            <button 
                className='JobCard-applyButton' 
                onClick={handleApply} 
                disable={applied}>
                    {applied || userAppliedJobs.includes(id) ? "Applied!" : "Apply Now!"}
            </button>
        </div>
    );

    function formatSalary(salary) {
        if (!salary ) return '0';
        const digitsRev = [];
        const salaryStr = salary.toString();
        for (let i = salaryStr.length - 1; i >= 0; i--) {
            digitsRev.push(salaryStr[i]);
            if (i > 0 && i % 3 === 0) digitsRev.push(',');
        }
        return digitsRev.reverse().join('');
    }

    function formatEquity(equity) {
        if(equity) {
            return equity; 
        } else {
            return 0;
        }
    }
}

export default JobCard;