import React from 'react'

const DoctorsList = () => {
  return (
    <div>DoctorsList</div>
  )
}

// export default DoctorsList

export default function DoctorsList() {
    return (
      <div>
        <h1>Medical Center 👨🏻‍⚕️ Find your Doctor Here</h1>
        <Link to="/"><Button variant="outlined">Go Back</Button></Link>
      </div>
    );
  }