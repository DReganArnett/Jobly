import React, {useState, useEffect} from "react";
import {useParams, Redirect} from "react-router-dom";
import JoblyApi from '../api';
import Header from "../common/Header";
import CompanyJobCardList from "./CompanyJobCardList";
// import JobCardList from "../jobs/JobCardList";


const CompanyDetail = ({id}) => {
    const {handle} = useParams()
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);
   
    console.log(jobs);
    
    useEffect(() => {
        async function getCompany() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setJobs(company.jobs);
        }
        
        getCompany();
    }, [handle]);    

    if (!company) <Redirect to="/"></Redirect>

    return (
        <div className="CompanyDetail">
            <Header />
            <h2>{company.name} </h2>
            <p><b>Number of employees</b>: {company.numEmployees}</p>
            <p><b>Company Description</b>: {company.description}</p>
            <br></br>
            {jobs.map(j => (
                <div className="CompanyDetail-jobs"> 
                    <CompanyJobCardList jobs={jobs} />
                </div>
            ))}
        </div>           

    );
}

export default CompanyDetail;