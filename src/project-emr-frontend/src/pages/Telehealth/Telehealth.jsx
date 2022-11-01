import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

import DoctorsList from '../DoctorsList/DoctorsList';

export default function telehealth() {
    return (
      <div>
        <PageTitle title="CHAT WITH YOUR PROVIDER"/>
        <DoctorsList />
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }