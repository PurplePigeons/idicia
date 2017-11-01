import React, { Component } from "react";
import bulma from "styles/bulma.scss";

export default class GettingStarted extends Component {
  render() {
    return (
      <div
        className={`${bulma.columns} ${bulma["is-multiline"]} ${bulma[
          "is-centered"
        ]}`}
        /* style={{ textAlign: "left" }} */
      >
        <div className={`${bulma.column} ${bulma["is-4"]}`}>
          <div className={bulma.field}>
            <label className={bulma.label}>Give us</label>
            <p
              className={`${bulma.control} ${bulma["has-icons-left"]} ${bulma[
                "has-icons-right"
              ]}`}
            >
              <input
                type="text"
                className={bulma.input}
                readOnly
                value={"joe.smith@acme.org"}
              />
              <span
                className={`${bulma.icon} ${bulma["is-small"]} ${bulma[
                  "is-left"
                ]}`}
              >
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
        </div>
        <div className={`${bulma.column} ${bulma["is-4"]}`}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Get back</h2>
          <div className={bulma.card}>
            <div className={bulma["card-content"]}>
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
