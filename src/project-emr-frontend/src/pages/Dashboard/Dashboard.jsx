import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'

import Widget from '../../components/Widget'

const Dashboard = () => {
  return (
    <div>
      <Box m="20px"></Box>
      <Header title="Welcome Summer!" subtitle="Dashboard" />
      
        <div className="widgets">
          <Widget type="my-profile" />
          <Widget type="appointments" />
          <Widget type="progress-notes" />
          <Widget type="laboratory-results" />
          <Widget type="my-medications" />
          <Widget type="messages" />
          <Widget type="telehealth" />
          <Widget type="payments" />
        </div>
      </div>
  )
}

export default Dashboard