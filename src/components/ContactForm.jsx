import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <input type="text" placeholder='Name' />
        <br />
        <input type="email" placeholder='Email' />
        <br />
        <textarea placeholder="Message..."></textarea>
        <br />
        <button type='submit'>submit</button>
    </div>
  )
}

export default ContactForm