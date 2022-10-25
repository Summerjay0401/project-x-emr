import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function telehealth() {
    return (
      <div>
        <h1>CHAT WITH YOUR PROVIDER</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }