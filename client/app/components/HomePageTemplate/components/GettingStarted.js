import React, { PureComponent } from 'react';

export default class GettingStarted extends PureComponent {
  render() {
    return (
      <div className="columns is-multiline is-centered">
        <div className="column is-4">
          <div className="field">
            <label className="label">Give us</label>
            <p className="control has-icons-left has-icons-right">
              <input
                type="text"
                className="input"
                readOnly
                value={'joe.smith@acme.org'}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
        </div>
        <div className="column is-4">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Get back</h2>
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
