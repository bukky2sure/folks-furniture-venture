import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contact FolksFurniture</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us!</p>
      <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name:</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email:</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>Message:</label>
          <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '.5rem' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '.5rem 1rem', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;