import React from 'react';
import { Link } from 'react-router';
import Reveal from 'react-reveal';

import styles from './styles.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="hero is-dark is-medium">
    <div className={styles.heroBody}>
      <Reveal effect="animated fadeIn">
        <div className="container">
          <div className="columns">
            <div className={`column content has-text-centered ${styles.darkTextFix}`}>
              <div className={styles.footerColumn1}>
                <img className={styles.footerLogo} src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087342/idicia/white.png" alt="Idicia Footer Logo" />
                <p>Integrated Verification, Enrichment and Comparison Solutions for Identity Verification, Fraud Prevention and Compliance.</p>
              </div>
            </div>
            <div className={`column content has-text-centered is-3 is-offset-1 ${styles.darkTextFix}`}>
              <div className={styles.footerColumn2}>
                <h3>Contact Info</h3>
                IDICIA (US)
                4900 SW Griffith Dr, Ste 251
                Beaverton, OR 97005
                <hr className={styles.hr} />
                IDICIA (Canada)
                101A 30701 Simpson Road
                Abbotsford, BC V2T 6C7
                <hr className={styles.hr} />
                <p className={styles.info}>
                  <a href="mailto:info@idicia.com">info@idicia.com</a>
                </p>
                <p className={styles.info}>1.844.4IDICIA</p>
              </div>
            </div>
            <div className={`column content has-text-centered ${styles.darkTextFix}`}>
              <div className={styles.footerColumn3}>
                <h3>Quick Links</h3>
                <p>
                  <Link to={'/'} className={styles.capsLink}>Home</Link>
                </p>
                <p>
                  <Link to={'/solutions'} className={styles.capsLink}>Solutions</Link>
                </p>
                <p>
                  <Link to={'/resources'} className={styles.capsLink}>Resources</Link>
                </p>
                <p>
                  <Link to={'/Contact Us'} className={styles.capsLink}>Contact Us</Link>
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ flex: 1, padding: '10px' }}>
                <a>
                  <i
                    className="fa fa-facebook-official fa-2x"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div style={{ flex: 1, padding: '10px' }}>
                <a>
                  <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
                </a>
              </div>
              <div style={{ flex: 1, padding: '10px' }}>
                <a>
                  <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles.creditFooter}`}>
          <div className={`content ${styles.darkTextFix}`}>
            <div className={styles.footerEnd}>
              <p>
                {`©${year} IDICIA, the Real-time Division of PacificEast. All Rights Reserved.`}
              </p>
              <p>
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={`container ${styles.creditFooter}`}>
          <div className={`content has-text-centered ${styles.darkTextFix}`}>
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
