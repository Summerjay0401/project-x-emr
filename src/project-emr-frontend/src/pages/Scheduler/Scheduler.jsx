import React, { useState } from 'react';
import { default as MuiScheduler } from "react-mui-scheduler";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PageTitle from '../../components/PageTitle';

const Scheduler = () => {
    const [state] = useState({
    options: {
        transitionMode: "zoom", // or fade
        startWeekOn: "mon",     // or sun
        defaultMode: "month",    // or week | day | timeline
        minWidth: 540,
        maxWidth: 540,
        minHeight: 540,
        maxHeight: 540
    },
    alertProps: {
        open: true,
        color: "success",          // info | success | warning | error
        severity: "info",       // info | success | warning | error
        message: "SCHEDULE YOUR APPOINTMENTS NOW" ,
        showActionButton: true,
        showNotification: true,
        delay: 1500
    },
    toolbarProps: {
        showSearchBar: true,
        showSwitchModeButtons: true,
        showDatePicker: true
    }
    })
      
    const events = [
    {
        id: "event-1",
        label: "Medical consultation",
        groupLabel: "Dr Shaun Murphy",
        user: "Dr Shaun Murphy",
        color: "#f28f6a",
        startHour: "04:00 AM",
        endHour: "05:00 AM",
        date: "2022-05-05",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
    },
    {
        id: "event-2",
        label: "Medical consultation",
        groupLabel: "Dr Claire Brown",
        user: "Dr Claire Brown",
        color: "#099ce5",
        startHour: "09:00 AM",
        endHour: "10:00 AM",
        date: "2022-05-09",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
    },
    {
        id: "event-3",
        label: "Medical consultation",
        groupLabel: "Dr Menlendez Hary",
        user: "Dr Menlendez Hary",
        color: "#263686",
        startHour: "13 PM",
        endHour: "14 PM",
        date: "2022-05-10",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
    },
    {
        id: "event-4",
        label: "Consultation prénatale",
        groupLabel: "Dr Shaun Murphy",
        user: "Dr Shaun Murphy",
        color: "#f28f6a",
        startHour: "08:00 AM",
        endHour: "09:00 AM",
        date: "2022-05-11",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
    }
    ]
    
    const handleCellClick = (event, row, day) => {
    // Do something...
    }
    
    const handleEventClick = (event, item) => {
    // Do something...
    }
    
    const handleEventsChange = (item) => {
    // Do something...
    }
    
    const handleAlertCloseButtonClicked = (item) => {
    // Do something...
    }
      
    return (
        <>
            <PageTitle title="My Appointments"/>
            <MuiScheduler
            locale="en"
            events={events}
            legacyStyle={false}
            options={state?.options}
            alertProps={state?.alertProps}
            toolbarProps={state?.toolbarProps}
            onEventsChange={handleEventsChange}
            onCellClick={handleCellClick}
            onTaskClick={handleEventClick}
            onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
            />
            <Link to="/"><Button variant="outlined">Go Back</Button></Link>
        </>
    )
}

export default Scheduler