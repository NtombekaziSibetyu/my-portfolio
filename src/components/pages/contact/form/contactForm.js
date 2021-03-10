import React from "react";
import './form.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
    return (
      <form className='form'
        onSubmit={this.submitForm}
        action="https://formspree.io/xleppnqw"
        method="POST"
      >
      <div className="form-content">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div>
                <label>Name   </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label>Email  </label>  
                <input
                  type="email"
                  name="_replyto"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Your email address"
                />
              </div>
              <div>
              <label>Message  </label> 
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Write your message..."
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              
            </div>
          </div>
          <div className="form-group">
              {status === "SUCCESS" ? <p>Email sent. Thanks!</p> : <button className='form-button'>Send</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </div>
       
      </form>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}