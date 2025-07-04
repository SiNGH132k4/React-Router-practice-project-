import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, labore ipsam. Eveniet rerum earum consectetur et dolorum excepturi sapiente similique, ullam nisi, quis voluptatum voluptatem modi quisquam molestias. Esse accusamus repudiandae officiis distinctio, autem nihil. Quae, error harum deserunt minima iste aut in iure laborum autem impedit, non, ut unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet, officiis debitis ducimus fuga ea aperiam quis minima. Tempora, aperiam.</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params; // destructuring id from params
    const res = await fetch('http://localhost:5000/jobs/' + id);
    if(!res.ok){
        throw Error('Could not find that job');
    }
    return res.json();
}