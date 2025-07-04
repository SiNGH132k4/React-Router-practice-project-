import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>List of job openings in our comapany.</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout