import React, { Component } from 'react'
import axios from "axios";

export default class mainpage extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          otp: ""
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
      };
    
      onSubmit = e => {
        e.preventDefault();
        const pat = {
            email: this.state.email,
            otp: this.state.otp
          };
        axios
        .post("/doctor/pat-otp", pat)
        .then(res => this.props.history.push("/doctor/profile/"+res.data))
      };
    render() {
        return (
            <div style={{marginTop: "100px"}} class="card conatiner col-lg-6 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
              
              <div className="input-field  mx-auto">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.otp}
                  id="otp"
                  type="text"
                />
                <label htmlFor="otp">OTP</label>
                         
                </div>
                <div>
           
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                >
                  Send OTP
                </button>
                <br />
                <br />
              </div>
              
              </form>
            </div>
        )
    }
}
