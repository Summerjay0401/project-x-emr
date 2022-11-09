import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Header from '../../components/Header'

import "./Telehealth.css";

import DoctorsList from '../DoctorsList';

export default function telehealth() {
  return (
    <div>
      <Header title="Provider List"/>
      <DoctorsList />
      <Link to="/"><Button sx={{marginTop: "10px", fontSize: "15px", fontWeight: "550", minWidth: "100px",}} variant="contained" className='btn'>Go Back</Button></Link>
    </div>
  );
}