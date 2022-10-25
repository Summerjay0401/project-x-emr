import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Appointments() {
    return (
      <div>
        <h1>THIS IS THE APPOINTMENTS TEST</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }