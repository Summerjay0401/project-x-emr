import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';
import DoctorsList from '../DoctorsList';
import './Telehealth.css';

export default function telehealth() {
    return (
      <div>
        <PageTitle title="CHAT WITH YOUR PROVIDER"/>
        <Link to="/"><Button variant="outlined" className="btn">Go Back</Button></Link>

        <DoctorsList />

      </div>
    );
  }