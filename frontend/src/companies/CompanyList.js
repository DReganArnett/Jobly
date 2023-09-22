import React, {useState, useEffect} from "react";
import {Redirect} from 'react-router-dom';
import JoblyApi from '../api';
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";


const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    async function search (name){
        let companies= await JoblyApi.getCompanies(name);
        setCompanies(companies);
    };

    useEffect (function getAllCompanies () {
        search()
    }, []);

    

    console.log("companies: ", companies);
    

    if (!companies) <Redirect to="/"></Redirect>

    return (
        <div className="CompanyList">
            <SearchForm searchTerm={search} />
            <h2>All Jobly Companies:</h2>
            {companies.length
                ? (
                    <div className="CompanyList-companies">
                        {companies.map((company) => (
                            <CompanyCard 
                                key ={company.handle}
                                handle={company.handle}
                                name={company.name}
                                description={company.description}
                                logoUrl={company.logoUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <h4 className="lead">Sorry, no companies with that search term were found!</h4>   
            )}
        </div>
    );
}

export default CompanyList;