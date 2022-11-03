import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import PageTitle from '../../components/PageTitle'

const ListOfPharmacies = () => {
    return (
        <div>
            <PageTitle title="List of Pharmacies" />
            <Link to="/">
                <Button variant="outlined">Go Back</Button>
            </Link>
        </div>
    )
}

export default ListOfPharmacies
