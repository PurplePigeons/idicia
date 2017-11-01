import React from "react";
import Button from "components/Button";

import bulma from "styles/bulma.scss";
import styles from "./styles.scss";

const ContactForm = () => {
  return (
    <div
      className={`${bulma.columns} ${bulma["is-multiline"]}`}
      id="contactForm"
      style={{ paddingTop: "30px" }}
    >
      <div
        className={`${bulma.card} ${bulma.column} ${bulma["is-half"]} ${bulma[
          "is-offset-one-quarter"
        ]}`}
      >
        <div className={bulma["card-content"]} style={{ padding: "0 2.5rem" }}>
          <div className={bulma.content}>
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    placeholder="Name"
                    style={{
                      padding: "10px 12px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  />
                </div>
                <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    style={{
                      padding: "10px 12px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  />
                </div>
                <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    placeholder="Company"
                    style={{
                      padding: "10px 12px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  />
                </div>
                <div style={{ flex: 1, borderBottom: "1px solid #ddd" }}>
                  <input
                    type="text"
                    placeholder="Email"
                    style={{
                      padding: "10px 12px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  />
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <button
                    style={{
                      // border: "1px solid #ddd",
                      backgroundColor: "#3d3d8a",
                      color: "#fff",
                      borderRadius: "6px",
                      width: "50%",
                      height: "40px",
                      marginTop: "35px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)"
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
