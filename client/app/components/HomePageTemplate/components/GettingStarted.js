import React, { PureComponent } from 'react';

export default class GettingStarted extends PureComponent {
  render() {
    return (
      <div className="columns is-multiline is-centered" style={{ marginTop: '20px' }}>
        <div className="column is-4">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>You Provide:</h2>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                type="email"
                className="input"
                readOnly
                value='Email Address'
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='SSN & Last Name'
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='Phone Number'
              />
              <span className="icon is-small is-left">
                <i className="fa fa-phone" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='Street Address'
              />
              <span className="icon is-small is-left">
                <i className="fa fa-map-marker" />
              </span>
            </p>
          </div>
        </div>
        <div className="column is-4">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>We Return:</h2>
          <div className="card">
            <div className="card-content">
              <ul>
                <li>
                  <strong>First name</strong>: Joe
                </li>
                <li>
                  <strong>Last name</strong>: Smith
                </li>
                <li>
                  <strong>Company</strong>: ACME, Inc.
                </li>
                <li>
                  <strong>Street Address</strong>: 1234 Looney Ln.
                </li>
                <li>
                  <strong>City/State/Zip</strong>: Nowhere, AL, 00000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
