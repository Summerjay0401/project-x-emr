import React, { useEffect, useState } from 'react'
import VitalsService from "../../../services/vitalService";
import { useAuth } from "../../../context/auth.context";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Avatar from "@mui/material/Avatar";
import BpIcon from "../../../assets/images/bp-icon.png";
import BSugarIcon from "../../../assets/images/bsugar-icon.jpg";
import PulseIcon from "../../../assets/images/pulse-icon.png";
import O2SatIcon from "../../../assets/images/o2-sat-icon.png";
import BodyTempIcon from "../../../assets/images/body-temp-icon.jpg";

import './Vitals.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    async function fetchData() {
        const response = await VitalsService.getById(userId);

        if (response.status === 200) setVitals(response.data)

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {
                !vitals ? <div>Loading...</div> :
                <div className='vitals-container'>
                    <VitalSign icon={
                        <Avatar
                            alt="blood pressure"
                            src={BpIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } handleClick={handleOpen} title="Blood Pressure" value={vitals.bloodPressure} />
                    <VitalSign icon={
                        <Avatar
                            alt="pulse"
                            src={PulseIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } handleClick={handleOpen} title="Pulse" value={vitals.pulse} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood sugar"
                            src={BSugarIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } handleClick={handleOpen} title="Blood Sugar" value={vitals.bloodSugar} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood pressure"
                            src={O2SatIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } handleClick={handleOpen} title="Oxygen Saturation" value={vitals.oxygenSaturation} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood pressure"
                            src={BodyTempIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } handleClick={handleOpen} title="Temperature" value={vitals.temperature} />
                </div>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default Vitals