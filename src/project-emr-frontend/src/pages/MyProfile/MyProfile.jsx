import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function myProfile() {
    return (
      <div>
        <h1>THIS IS THE MY PROFILE TEST</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }