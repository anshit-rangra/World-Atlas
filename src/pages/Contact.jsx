import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    username:"",
    email:"",
    message:"",
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData((prev)=>({
      ...prev,
      [name]:value

    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action=''>
          <input type="text" value={data.username} onChange={handleChange} required autoComplete='off' placeholder='Enter your name' name="username" className='form-control' />

          <input type="email" value={data.email} onChange={handleChange} required autoComplete='off' placeholder='Enter your email' name="email" className='form-control' />

          <textarea name="message" value={data.message} onChange={handleChange} className='form-control' rows='10' placeholder='Enter your message' required autoComplete='off' ></textarea>

          <button type='submit' onClick={handleSubmit} value="SEND">SEND</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
