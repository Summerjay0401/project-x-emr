import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import PageTitle from '../../components/PageTitle'

const DoctorsList = () => {
  return (
    <div>
      <PageTitle title="Medical Center 👨🏻‍⚕️ Find your Doctor Here" />
      <Link to="/">
        <Button variant="outlined">Go Back</Button>
      </Link>
    </div>
  )
}

export default DoctorsList