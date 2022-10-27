import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

export default function payments() {
    return (
      <div>
        <PageTitle title="Pay here"/>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }