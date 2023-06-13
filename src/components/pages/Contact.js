import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xlekqgjy");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Name...'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email...'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
