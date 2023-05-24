import React, { useState } from 'react';
import MEDIA from '../../media/media';
import { Helmet } from 'react-helmet';
import Model from '../model';

const Contact = () => {
  // Display form data
  const [formData, setFormData] = useState({ name: '', email: '', message: '', });
  // Display response data
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form data changes
  const change = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submit
  const submit = async (event) => {
    event.preventDefault();

    // Verify data
    if (formData.name == "") {setResponseMessage("'Name' is a required field."); return null} 
    else if (formData.email == "") {setResponseMessage("'Email' is a required field."); return null} 
    else if (formData.message == "") {setResponseMessage("'Message' is a required field."); return null} 
    else if (!formData.email.includes('@')) {setResponseMessage("'Email' is not valid, please enter a correct email structure."); return null}

    try { const response = await Model.message(formData); setResponseMessage(response.message) } 
    catch (error) { console.error(error); }
  };

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Contact</title>
      </Helmet>
      <div class="box title">
        <h1>Contact Us</h1>
      </div>
      <div class="box">
        <h1>Contail details</h1>
        <p>Phone: placeholder</p>
        <p>Office Hours: placeholder</p>
        <p>Email: placeholder</p>
        <p>Address: placeholder</p>
        <p>Follow us</p>
        <a href="https://www.facebook.com/motorcultureaustralia" target="_blank" rel="noopener noreferrer" name="Facebook">
          <img src={MEDIA.facebook} alt="MCA Facebook page" className='channel'/>
        </a>
        <a href="https://www.youtube.com/channel/UCf7S7jAmb7_sT2ZCsO6Ajig" target="_blank" rel="noopener noreferrer" name="Youtube">
          <img src={MEDIA.youtube} alt="MCA Youtube channel" className='channel'/>
        </a>
        <a href="https://www.instagram.com/motor_culture_australia/?hl=en" target="_blank" rel="noopener noreferrer" name="Instagram">
          <img src={MEDIA.instagram} alt="MCA Instagram page" className='channel'/>
        </a>
        <a href="https://www.tiktok.com/@motorcultureaustralia" target="_blank" rel="noopener noreferrer" name="Tiktok">
          <img src={MEDIA.tiktok} alt="MCA Tiktok channel" className='channel'/>
        </a>
      </div>
      <form action="/contact" method="post" class="box" onSubmit={submit}>
        <h1>Have a question? Enter your details below and we'll get back to you</h1>
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' value={formData.name} onChange={change}/>

            <label>Email</label>
            <input type="email" name="email" placeholder='Email' value={formData.email} onChange={change}/>

            <label>Message</label>
            <textarea name="message" rows='5' cols='80' placeholder='Message' value={formData.message} onChange={change}></textarea>

            <input type='submit' value="Send"/>

            <p classs="response">{responseMessage}</p>
      </form>
    </div>
  );
};

export default Contact;
