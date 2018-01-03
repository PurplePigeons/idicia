import React from 'react';
import { Link } from 'react-router';
import Reveal from 'react-reveal';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

import LargeLogo from './white.png';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={`${bulma.hero} ${bulma['is-dark']} ${bulma['is-medium']}`}>
    <div className={`${styles.heroBody}`} >
      <Reveal effect="animated fadeIn">
      <div className="container">          
          <div className="columns">

            {/* Quicklinks  & Social Media buttons */} 
            {/* These need more vertical space between them */}
            <div className={`column content has-text-left is-3 is-offset-1 ${styles.darkTextFix}`}>
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
                {/* Bring social media icons closer together and add "follow us on:"*/}
                <hr className={`has-text-left ${styles.hrLeft}`} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ flex: 1, padding: "5px" }}>
                  <a href="https://www.facebook.com/IDICIA/">
                    <i
                      className="fa fa-facebook-official fa-2x"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div style={{ flex: 1, padding: "5px" }}>
                  <a href="https://twitter.com/4idicia?lang=en">
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
                  </a>
                </div>
                <div style={{ flex: 1, padding: "5px" }}>
                  <a href="https://www.linkedin.com/company/idicia">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
                  </a>
                </div>
                </div>
            </div>

              {/* logo and mission statement */}
            <div className={`column has-text-centered is-4 ${styles.darkTextFix}`}>
                <img className={styles.footerLogo} src={LargeLogo} alt="Idicia Footer Logo" />
                <hr/>
                <p>Integrated Verification, Enrichment and Comparison Solutions for Identity Verification, Fraud Prevention and Compliance.</p>
                <table className={`table is-narrow ${styles.contactTable}`}>
                  {/* How to get these two to sit on the same line?! */}
                  <td className={`${styles.info}`} >
                    <a href="mailto:info@idicia.com">info@idicia.com</a>
                  </td>
                  <td className={`${styles.info}`} >1.844.4IDICIA</td>
                </table>
            </div>
              
              {/* Contact info */}
            <div className={`column content has-text-right is-3 ${styles.darkTextFix}`}>
              <h3>Locations</h3>
              IDICIA (US)
              4900 SW Griffith Dr, Ste 251
              Beaverton, OR 97005
              <hr className={styles.hrRight} />
              IDICIA (Canada)
              273 - 8661 201st Street
              2nd Floor
              Langley, BC V2Y 0G9
              <hr className={styles.hrRight} />
            </div>
          </div>
          </div>
          

          {/* Legal */}
          <div className="container">
          <div className={`content has-text-centered ${styles.darkTextFix}`}>
                <p>
                  {`©${year} IDICIA, the Real-time Division of PacificEast. All Rights Reserved.`}
                </p>
                <p>
                  <Link to={'/privacy-policy'}>Privacy Policy</Link>
                </p>
              </div>
          </div>
        
        {/* Credits */}
        <div className={`container ${styles.creditFooter}`}>
          <div className={`content has-text-centered ${styles.darkTextFix}`}>
            <p>
              <strong>KeystoneJS + React-Redux + RxJS</strong> by <a href="https://github.com/stern-shawn">Shawn Stern</a>.
            </p>
            <p>
              <a className={bulma.icon} href="https://github.com/PurplePigeons/idicia">
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
