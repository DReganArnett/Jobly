import React from "react";
import {Link} from 'react-router-dom';


const CompanyCard = ({handle, name, description, logoUrl}) => {
    return (
        <div className="CompanyCard">
            <Link to={`/companies/${handle}`}>
                <h4>{name}{logoUrl}</h4>
            </Link>
            <p>{description}</p>
        </div>
    )

}

export default CompanyCard;