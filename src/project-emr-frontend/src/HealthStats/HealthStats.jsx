import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import PageTitle from '../../components/PageTitle'

const HealthStats = () => {
  return (
    <div>
      <PageTitle title="Health Stats" />
      <Link to="/">
        <Button variant="outlined">Go Back</Button>
      </Link>
    </div>
  )
}

export default HealthStats 
