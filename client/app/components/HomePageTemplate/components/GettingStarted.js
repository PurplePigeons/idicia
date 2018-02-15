import React, { PureComponent } from 'react';


export default class GettingStarted extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      inputValue: 0
    }
  }

  clickHandler = (e) => {
    this.setState({inputValue: e});
  }

  render(props) {

    const dataList = this.props.testData.dataPoints[this.state.inputValue].map((dataType, index) => 
      <li style={{paddingBottom: ".25rem"}} key={index}>
        <strong>{dataType}</strong>
      </li>
    );

    return (
      <div className="columns is-multiline is-centered" style={{ marginTop: '20px' }}>
        <div className="column is-4">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>You Provide:</h2>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                type="email"
                className="input"
                readOnly
                value='Email Address'
                onClick={() => this.clickHandler(1)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='SSN & Last Name'
                onClick={() => this.clickHandler(2)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='Phone Number'
                onClick={() => this.clickHandler(3)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-phone" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="text"
                className="input"
                readOnly
                value='Street Address'
                onClick={() => this.clickHandler(4)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-map-marker" />
              </span>
            </p>
          </div>
        </div>
        <div className="column is-4">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>We Return:</h2>
          <div className="card">
            <div className="card-content has-text-centered">
              <ul>
                {dataList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
