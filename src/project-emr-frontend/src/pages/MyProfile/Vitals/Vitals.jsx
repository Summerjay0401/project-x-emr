import React, { useEffect, useState } from 'react'
import VitalsService from "../../../services/vitalService";
import { useAuth } from "../../../context/auth.context";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Avatar from "@mui/material/Avatar";
import BpIcon from "../../../assets/images/bp-icon.png";
import BSugarIcon from "../../../assets/images/bsugar-icon.jpg";
import PulseIcon from "../../../assets/images/pulse-icon.png";
import O2SatIcon from "../../../assets/images/o2-sat-icon.png";
import BodyTempIcon from "../../../assets/images/body-temp-icon.jpg";

import './Vitals.css';

const VitalSign = ({icon, title, value, handleClick}) => {
    return (
        <div className="vital-card" onClick={() => handleClick()}>
          <div className="left">
            {icon}
            <span className="title">{title}</span>
            <span className="title">{value}</span>
          </div>
        </div>
    );
}

const Vitals = () => {

    const [state] = useAuth();

    const [userId] = useState(state.user.id);
    const [vitals, setVitals] = useState();
    const [vitalSign, setVitalSign] = useState("");
    const [open, setOpen] = React.useState(false);

    useEffect(() => {

        const fetchData = async () => {
            const response = await VitalsService.getById(userId);
            console.log(response);
            if (response.status === 200) setVitals(response.data)
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveVitals = async (obj) => {
        const response = await VitalsService.create(obj);
        if (response.status === 200) setOpen(false);
    };

    const handleOpen = (vital) => {
        setVitalSign(vital);            
        setOpen(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const value = data.get('vitals'); 
        
        let obj = { ...vitals, userId };
        if (vitalSign === "Blood Pressure") obj = { ...obj, bloodPressure: value };
        if (vitalSign === "Pulse") obj = { ...obj, pulse: value };
        if (vitalSign === "Blood Sugar") obj = { ...obj, bloodSugar: value };
        if (vitalSign === "Oxygen Saturation") obj = { ...obj, oxygenSaturation: value };
        if (vitalSign === "Temperature") obj = { ...obj, temperature: value };

        setVitals(obj);
        console.log(obj);
        saveVitals(obj);

    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='vitals-container'>
                <VitalSign icon={
                    <Avatar
                        alt="blood pressure"
                        src={BpIcon}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                }
                    handleClick={() => handleOpen("Blood Pressure")}
                    title="Blood Pressure"
                    value={
                        !vitals?.bloodPressure ? "---" : vitals.bloodPressure
                    } />
                <VitalSign icon={
                    <Avatar
                        alt="pulse"
                        src={PulseIcon}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                } handleClick={() => handleOpen("Pulse")}
                  title="Pulse" value={
                  !vitals?.pulse ? "---" : vitals.pulse
                 }/>
                <VitalSign icon={
                    <Avatar
                        alt="blood sugar"
                        src={BSugarIcon}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                }
                    handleClick={() => handleOpen("Blood Sugar")}
                    title="Blood Sugar"
                    value={
                        !vitals?.bloodSugar ? "---" : vitals.bloodSugar
                    } />
                <VitalSign icon={
                    <Avatar
                        alt="oxygen saturation"
                        src={O2SatIcon}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                } handleClick={() => handleOpen("Oxygen Saturation")}
                  title="Oxygen Saturation"
                  value={
                    !vitals?.oxygenSaturation ? "---" : vitals.oxygenSaturation
                  } />
                <VitalSign icon={
                    <Avatar
                        alt="Temperature"
                        src={BodyTempIcon}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                } handleClick={() => handleOpen("Temperature")}
                  title="Temperature" 
                  value={
                    !vitals?.temperature ? "---" : vitals.temperature
                  } />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <DialogTitle>Please enter your {vitalSign}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        We will update your diagnosis and notes.
                    </DialogContentText>
                        {/* {message && <Alert severity="error">{message}</Alert>} */}
                
                            <TextField
                                autoFocus
                                margin="dense"
                                fullWidth
                                variant="standard"
                                name="vitals"
                                type="vitals"
                                id="vitals"
                                label={`${vitalSign}`}
                            />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
}

export default Vitals