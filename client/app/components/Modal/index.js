import React from 'react';
import ReactModal from 'react-modal';
import styles from "./styles.scss";
import bulma from 'bulma';
import avatar from "./IDICIA-logo-clear-center.svg";

class ContactModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div className="navbar-item animated fadeInUp">
          <button className="button is-link" onClick={this.handleOpenModal}>Contact Us</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             style={{
                overlay: {
                  backgroundColor: 'rgba(221, 221, 221, 0.9)',
                },
                content: {
                    border                     : '2px solid #fff',
                    background                 : '#dddddd',
                    borderRadius               : "20px"
                 
                }
              }}
          >
            {/* avatar for brand image */}
                {/* <div className="column is-one-fifth">
                </div> */}
                    <figure>
                            <img className={`${styles.img}`} src={avatar} />
                    </figure>                
            {/* bulma form */}
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label" >From: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Name" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Company" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-building"></i>
                        </span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Contact: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control is-expanded has-icons-left">
                        <input className="input" type="tel" placeholder="Your phone number" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-phone"></i>
                        </span>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </p>
                    </div>
                </div>
            </div>
                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Subject: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g. Partnership opportunity, Quote Request" />
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Question: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" placeholder="How can we help you"></textarea>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                <div className="field-label">
                    {/* <!-- Left empty for spacing --> */}
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <button className="button is-primary">
                            Send message
                        </button>
                        <button className="button is-primary is-inverted" onClick={this.handleCloseModal} style={{paddingLeft: '20 px'}}>
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
            </div>
          </ReactModal>
        </div>
      );
    }
  }
  
  const props = {};
  
//    ReactDOM.render(<Examppx",leApp {...props} />, document.getElementById('main'))

export default ContactModal;