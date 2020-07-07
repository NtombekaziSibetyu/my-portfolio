import React from "react";
import './form.css'

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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xleppnqw"
        method="POST"
      >
      <div className="form-group">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div className="form-group hidden">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <label>Email:</label>  
                <input
                  type="email"
                  name="_replyto"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Your email"
                />
              </div>
            </div>
          </div>
          <div className='form-group hiddenRight'>
            <div className='row'>
               <div className='col-12 col-sm-12 col-md-6 mx-auto'>
               <textarea
                  name="message"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your message..."
                />
                <div>
                {status === "SUCCESS" ? <p>Email sent. Thanks!</p> : <button className='contact-form'>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
               </div>
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