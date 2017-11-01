import React from 'react';
import Button from 'components/Button';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const ContactForm = () => {
  // <section classNameName={infoHero}>
  // <div classNameName={bulma['hero-body']}>
  // 	<div classNameName={bulma.container}>
  // 		<h2 classNameName={`${bulma.title} ${styles.contactUsTitle}`}>{titleOptions[titleSelector]}</h2>
  // 		<h3 classNameName={styles.contactUsText}>{taglineOptions[taglineSelector]}</h3>

  return (
		<div className={`${bulma.columns} ${bulma['is-multiline']}`} id="contactForm">
			<div className={`${bulma.card} ${bulma.column} ${bulma['is-half']} ${bulma['is-offset-one-quarter']}`}>
				<div className={bulma['card-content']}>
					<div className={bulma.media}>
						<div className={bulma['media-content']}>
							<p className={`${bulma.title} ${bulma['is-4']}`}>Contact Us</p>
						</div>
					</div>

					<div className={bulma.content}>
					<div className={`${bulma.columns} ${bulma['is-multiline']}`}>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-user-circle fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<div className={`${bulma.column} ${bulma['is-three-quarters']} has-float-label ${styles.input}`}>
							<input className={`${bulma.column} ${bulma['is-three-quarters']} `} type="first" placeholder="Name" />
							<label htmlFor="First">First</label>
						</div>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-user-circle fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<label className="has-float-label">
							<input type="last" placeholder="Name" />
							<span>Last</span>
						</label>
						</div>
					<div className={`${bulma.columns} ${bulma['is-multiline']}`}>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-envelope fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<label className="has-float-label">
							<input type="email" placeholder="email@example.com" />
							<span>Email</span>
						</label>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-building fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<label className="has-float-label">
							<input type="company" placeholder="Name" />
							<span>Company</span>
						</label>
					</div>
					<div className={`${bulma['is-multiline']}`}>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-phone-square fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<label className="has-float-label">
							<input type="phone" placeholder="xxx-xxx-xxxx" />
							<span>Phone</span>
						</label>
						<i className={`${bulma.column} ${bulma['is-narrow']} fa fa-mobile fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<label className="has-float-label">
							<input type="mobile" placeholder="xxx-xxx-xxxx" />
							<span>Mobile</span>
						</label>
					</div>
						<br />
						<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
					</div>
				</div>
			</div>
		</div>
  );
};

export default ContactForm;
