import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InteractiveModal from 'components/InteractiveModal';

class ContactUsModal extends PureComponent {
  static propTypes = {
    close: PropTypes.func.isRequired,
  }

  handleSubmit = () => {

    emailjs.send("gmail","template_x5ME6jZ4",{
      name: {name}, 
      company: "pac east",
      email: "leseanbiz@gmail.com",
      phone: "4439395333",
      subject: "test",
      question: "this is a hardcoded test"
    },console.log("email sent"));
    // Placeholder secondary action on form submit... could be something other than a native alert
    // 1. Do something to grab form values from html
    // 2. Validate
    // 3. If valid, dispatch action so an epic can send the AJAX POST to the contact API
    // 4. Inform user and close modal
    alert("Thanks for contacting Idicia! You'll be hearing from us soon!");
    this.props.close();
  }

  render() {
    const { close } = this.props;

    return (
      <InteractiveModal focusFirst="input#name" closeModal={close}>
        <div className="modal-card animated fadeIn">
          <header className="modal-card-head">
            <div className="modal-card-title">
              <figure className="image is-48x48">
                <img role="presentation" src="/images/svgs/IDICIA-logo-clear-center.svg" />
              </figure>
            </div>
            <button className="delete" aria-label="close" onClick={close} />
          </header>

          <section className="modal-card-body">
            <form method="POST">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="name">From</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="text" placeholder="Name" id="name" name="name"/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input className="input" type="text" placeholder="Company" name="company"/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-building" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="phone">Contact</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="tel" placeholder="Your phone number" id="phone" name="phone" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-phone" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input className="input" type="email" placeholder="Email" name="email"/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="subject">Subject</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="e.g. Partnership opportunity, Quote Request" id="subject" name="subject"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" htmlFor="question">Question</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" placeholder="How can we help you" id="question" name="question"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                  {/* Left empty for spacing */}
                </div>
                <div className="field-body">
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-primary" onClick={this.handleSubmit} type="submit">
                        Send message
                      </button>
                    </div>
                    <div className="control">
                      <button className="button is-primary is-inverted" onClick={close}>
                        Cancel
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot" />
        </div>
      </InteractiveModal>
    );
  }
}

export default ContactUsModal;
