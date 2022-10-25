import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function MyProfile() {
    return (
      <div class="mx-5 d-flex flex-column">
        <h1>THIS IS THE MY PROFILE TEST</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }