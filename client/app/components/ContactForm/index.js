import React from 'react';

const inputStyle = {
  padding: '10px 12px',
  width: '100%',
  textAlign: 'center',
};

const inputWrapperStyle = {
  flex: 1,
  borderBottom: '1px solid #ddd',
};

const submitButtonStyle = {
  // border: '1px solid #ddd',
  backgroundColor: '#3d3d8a',
  color: '#fff',
  borderRadius: '6px',
  width: '50%',
  height: '40px',
  marginTop: '35px',
  marginBottom: '10px',
  cursor: 'pointer',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
};

const handleSubmit = (e) => e.preventDefault();

const ContactForm = () => (
  <div
    className="columns is-multiline"
    id="contactForm"
    style={{ paddingTop: '30px' }}
  >
    <div className="card column is-half is-offset-one-quarter">
      <div className="card-content" style={{ padding: '0 2.5rem', textAlign: 'center' }}>
        <h1 className="title">Contact Us</h1>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={inputWrapperStyle}>
                <input type="text" placeholder="Name" style={inputStyle} />
              </div>
              <div style={inputWrapperStyle}>
                <input type="text" placeholder="Phone Number" style={inputStyle} />
              </div>
              <div style={inputWrapperStyle}>
                <input type="text" placeholder="Company" style={inputStyle} />
              </div>
              <div style={inputWrapperStyle}>
                <input type="text" placeholder="Email" style={inputStyle} />
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <button style={submitButtonStyle}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;
