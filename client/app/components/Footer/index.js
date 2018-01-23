import React from 'react';
import { Link } from 'react-router';
import Reveal from 'react-reveal';

import styles from './styles.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={`hero is-dark is-medium ${styles.footerBody}`}>
    <div className="container is-fluid">
      <Reveal effect="animated fadeIn">
        <div className="columns">
          {/* Quicklinks & Social Media buttons */}
          <div className="column is-3 is-offset-1 has-text-centered-mobile">
            <h3>Quick Links</h3>
            <p>
              <Link to={'/'}>Home</Link>
            </p>
            <p>
              <Link to={'/solutions'}>Solutions</Link>
            </p>
            <p>
              <Link to={'/resources'}>Resources</Link>
            </p>
            <p>
              <Link to={'/contact-us'}>Contact Us</Link>
            </p>
            <hr className={`has-text-left is-hidden-mobile ${styles.hrLeft}`} />
            <p>Follow Us On:</p>
            <div style={{ display: 'flex', paddingTop: '0.75rem' }}>
              <div style={{ flex: 1 }}>
                <a href="https://www.facebook.com/IDICIA/">
                  <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
                </a>
              </div>
              <div style={{ flex: 1 }}>
                <a href="https://twitter.com/4idicia?lang=en">
                  <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
                </a>
              </div>
              <div style={{ flex: 1 }}>
                <a href="https://www.linkedin.com/company/idicia">
                  <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* logo and mission statement */}
          <div className="column content has-text-centered is-4">
            <img
              className={styles.footerLogo}
              src="images/white.png"
              alt="Idicia Footer Logo"
            />
            <hr />
            <p>Integrated Verification, Enrichment and Comparison Solutions for Identity Verification, Fraud Prevention and Compliance.</p>
            <p className={styles.contactEmailAndPhone}>
              <a href="mailto:info@idicia.com">info@idicia.com</a>
              <span>1.844.4IDICIA</span>
            </p>
          </div>

          {/* Contact info */}
          <div className="column is-3 has-text-right-desktop has-text-right-tablet has-text-centered-mobile">
            <h3>Locations</h3>
            <span>
              IDICIA (US)
              4900 SW Griffith Dr, Ste 251
              Beaverton, OR 97005
            </span>
            <hr className={`is-hidden-mobile ${styles.hrRight}`} /><br />
            <span>
              IDICIA (Canada)
              273 - 8661 201st Street
              2nd Floor
              Langley, BC V2Y 0G9
            </span>
            <hr className={`is-hidden-mobile ${styles.hrRight}`} />
          </div>
        </div>

        {/* Legal */}
        <div className="container is-fluid" style={{ padding: '5px' }}>
          <div className="content has-text-centered">
            <p>
              {`©${year} IDICIA, the Real-time Division of PacificEast. All Rights Reserved.`}
            </p>
            <p>
              <Link to={'/privacy-policy'}>Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className={`container is-fluid ${styles.creditFooter}`}>
          <div className="content has-text-centered">
            <p>
              <strong>KeystoneJS + React-Redux + RxJS</strong> by <a href="https://github.com/stern-shawn">Shawn Stern</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/PurplePigeons/idicia">
                <i className="fa fa-github fa-3x"></i>
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;
