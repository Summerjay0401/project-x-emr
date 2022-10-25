import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function laboratoryResults() {
    return (
      <div>
        <h1>THIS IS THE LABORATORY RESULTS TEST</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }