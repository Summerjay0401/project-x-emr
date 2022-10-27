import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import PageTitle from '../../components/PageTitle'

const MedicalHistory = () => {
  return (
    <div>
      <PageTitle title="Medical History" />
      <Link to="/">
        <Button variant="outlined">Go Back</Button>
      </Link>
    </div>
  )
}

export default MedicalHistory
