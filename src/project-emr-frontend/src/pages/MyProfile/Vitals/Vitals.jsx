import React, { useEffect, useState } from 'react'
import VitalsService from "../../../services/vitalService";
import { useAuth } from "../../../context/auth.context";

import Avatar from "@mui/material/Avatar";
import BpIcon from "../../../assets/images/bp-icon.png";
import BSugarIcon from "../../../assets/images/bsugar-icon.jpg";
import PulseIcon from "../../../assets/images/pulse-icon.png";
import O2SatIcon from "../../../assets/images/o2-sat-icon.png";
import BodyTempIcon from "../../../assets/images/body-temp-icon.jpg";

import './Vitals.css';

const VitalSign = ({icon, title, value}) => {
    return (
        <div className="vital-card">
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
                    } title="Blood Pressure" value={vitals.bloodPressure} />
                    <VitalSign icon={
                        <Avatar
                            alt="pulse"
                            src={PulseIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } title="Pulse" value={vitals.pulse} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood sugar"
                            src={BSugarIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } title="Blood Sugar" value={vitals.bloodSugar} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood pressure"
                            src={O2SatIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } title="Oxygen Saturation" value={vitals.oxygenSaturation} />
                    <VitalSign icon={
                        <Avatar
                            alt="blood pressure"
                            src={BodyTempIcon}
                            variant="square"
                            sx={{ width: 150, height: 150 }}
                        />
                    } title="Temperature" value={vitals.temperature} />
                </div>
            }
        </>
    );
}

export default Vitals