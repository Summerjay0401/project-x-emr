import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

export default function messages() {
    return (
      <div>
        <PageTitle title="My Messages"/>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }