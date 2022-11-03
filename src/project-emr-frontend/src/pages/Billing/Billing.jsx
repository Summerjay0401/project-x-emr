import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import './Billing.css';

const Billing = () => {
 return (
        <div>
            <PageTitle title="Billing" />
        
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography className="label-align-center card-billing" sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    UPENN MEDICAL CENTER
                    </Typography>
                    <Typography className="label-align-center guarantor" sx={{ mb: 1.5 }} color="text.secondary">
                    Guarantor #23456734 (Dan Ross)
                    </Typography>
                    <Typography className="label-align-center amount-text" variant="body2" sx={{fontSize: 18, color: "black"}}>
                    Amount Due
                    </Typography>
                    <Typography className="label-align-center amount-value" variant="body2" sx={{fontSize: 18, color: "green"}}>
                    {'$100.00'}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                <Link to="/payments"><Button size="large">Pay Now</Button></Link>
                </CardActions>
                </Card>
            <Link to="/"><Button variant="outlined">Go Back</Button></Link>
        </div>
    );
}

export default Billing






