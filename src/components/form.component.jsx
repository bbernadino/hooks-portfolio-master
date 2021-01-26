import React, { useState } from 'react';

import styled from 'styled-components';

import { Button } from '../pages/homepage.component';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;

  label {
    color: #524f4a;
    font-weight: bold;
    align-self: flex-start;
  }
`;

const ContactField = styled.input`
  height: 40px;
  width: 100%;
  margin: 15px 0;
  padding-left: 15px;
`;

const ContactMessage = styled.textarea`
  width: 100%;
  margin: 20px 0;
  padding-left: 15px
`;

const ContactButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = ({ setMessageSent }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearFields = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
    };
    xhr.send(data);

    setMessageSent(true);
    clearFields();
  };

  return (
    <ContactForm
      onSubmit={e => handleSubmit(e)}
      action='https://formspree.io/xgelybob'
      method='POST'
    >
      <label>Your Name:</label>
      <ContactField
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label>Your Email:</label>
      <ContactField
        name='email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>Your Message:</label>
      <ContactMessage
        name='message'
        type='string'
        placeholder='Please Leave a Message'
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={10}
      />
      <ContactButtonBox>
        <Button>Submit</Button>
      </ContactButtonBox>
    </ContactForm>
  );
};

export default Form;