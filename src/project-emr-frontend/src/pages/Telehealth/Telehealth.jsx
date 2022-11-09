import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

import "./Telehealth.css";

import DoctorsList from '../DoctorsList';

export default function telehealth() {
  return (
    <div>
      <PageTitle title="CHAT WITH YOUR PROVIDER" />
      <DoctorsList />
      <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", fontWeight: "550", minWidth: "100px",}} variant="contained" className='btn'>Go Back</Button></Link>
    </div>
  );
}