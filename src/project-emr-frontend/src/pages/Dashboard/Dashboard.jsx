import React from 'react'

import Widget from '../../components/Widget'

const Dashboard = () => {
  return (
      <div>
            <h1>Dashboard</h1>
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