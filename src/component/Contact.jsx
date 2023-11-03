import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send an email to your desired address
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={handleMessageChange} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
