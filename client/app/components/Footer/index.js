import React from 'react';
import { Link } from 'react-router';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

import LargeLogo from './white.png';

const Footer = () => (
  <footer className={`${bulma.hero} ${bulma['is-dark']} ${bulma['is-medium']}`}>
    <div className={bulma['hero-body']}>
      <div className={bulma.container}>
        <div className={bulma.columns}>
          <div className={`${bulma.column} ${bulma.content} ${bulma['has-text-centered']} ${styles.darkTextFix}`}>
            <div className={styles.footerColumn1}>
              <img className={styles.footerLogo} src={LargeLogo} alt="Idicia Footer Logo" />
              <p>Integrated Verification, Enrichment and Comparison Solutions for Identity Verification, Fraud Prevention and Compliance.</p>
            </div>
          </div>
          <div className={`${bulma.column} ${bulma.content} ${bulma['has-text-centered']} ${styles.darkTextFix}`}>
            <div className={styles.footerColumn2}>
              <h3>Contact Info</h3>
              <p>IDICIA (US)</p>
              <p>4900 SW Griffith Dr, Ste 251</p>
              <p>Beaverton, OR 97005</p>
              <hr className={styles.hr} />
              <p>IDICIA (Canada)</p>
              <p>101A 30701 Simpson Road</p>
              <p>Abbotsford, BC V2T 6C7</p>
              <hr className={styles.hr} />
              <p className={styles.info}>
                <a href="mailto:info@idicia.com">info@idicia.com</a>
              </p>
              <p className={styles.info}>1.844.4IDICIA</p>
            </div>
          </div>
          <div className={`${bulma.column} ${bulma.content} ${bulma['has-text-centered']} ${styles.darkTextFix}`}>
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
        </div>
      </div>
      <div className={`${bulma.container} ${styles.creditFooter}`}>
        <div className={`${bulma.content} ${bulma['has-text-centered']} ${styles.darkTextFix}`}>
          <p>
            <strong>KeystoneJS + React-Redux + RxJS</strong> by <a href="https://github.com/stern-shawn">Shawn Stern</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a className={bulma.icon} href="https://github.com/PurplePigeons/idicia">
              <i className="fa fa-github fa-3x"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
