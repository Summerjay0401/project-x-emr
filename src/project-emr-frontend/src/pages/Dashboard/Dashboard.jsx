import React from 'react'
import PageTitle from '../../components/PageTitle'

import Widget from '../../components/Widget'

const Dashboard = () => {
  return (
      <div>
        <PageTitle title="Dashboard"/>
      
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