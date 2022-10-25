import React from 'react'

import Widget from '../../components/Widget'
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
      <div>
            <h1>Dashboard</h1>
            <div className="widgets">
            <Link to="/my-profile"><Widget type="my-profile" /></Link>
            <Link to="/appointments"><Widget type="appointments" /></Link>
            <Link to="/progress-notes"><Widget type="progress-notes" /></Link>
            <Link to="/lab-results"><Widget type="laboratory-results" /></Link>
            <Link to="/my-medications"><Widget type="my-medications" /></Link>
            <Link to="/messages"><Widget type="messages" /></Link>
            <Link to="/telehealth"><Widget type="telehealth" /></Link>
            <Link to="/payments"><Widget type="payments" /></Link>
            </div>
    </div>
  )
}

export default Dashboard