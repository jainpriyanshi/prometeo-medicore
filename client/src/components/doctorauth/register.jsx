import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerDoctor } from "../../actions/authActions";
import classnames from "classnames";

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


var sectionStyle = {
  position : 'absolute',
  width: "100%",
  height: "100%",
 background: `url(${process.env.PUBLIC_URL}/auth_bg.jpg)` ,
 backgroundPosition: 'center',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat'
};

class RegisterDoctor extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      email: "",
      address:"",
      licenseNo:"",
      contactNo:"",
      qualification:"",
      specialisation: "",
      sex: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/doctor/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      address:this.state.address,
      contactNo:this.state.contactNo,
      licenseNo: this.state.licenseNo,
      qualification:this.state.qualification,
      specialisation:this.state.specialisation,
      sex: this.state.sex,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(newUser);
    this.props.registerDoctor(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      
        <div style= {sectionStyle}>
        <br></br>
        
      <div class="container">
          <div class="row">
          <div class="col-md-6 col-sm-12 my">
              
              </div>
              <div class="col-md-6 col-sm-12">
              
              <Box width ="100%" height="100%"  item xs={12} sm={8} md={5} component={Paper} elevation={6} className="card" >
              
              
                <div class="conainer">
              <div >
              <h4 style={{ margin: "50px 50px "  }}>
              <b>Register as Doctor</b>
              </h4>
              </div>
                <form noValidate onSubmit={this.onSubmit} style={{ margin: "40px 40px"  }}>
                 
                <div className="input-field col s12">
                <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
                </div>

                  <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
                </div>

                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.address
                  })}
                />
                <label htmlFor="adress">Address</label>
                <span className="red-text">{errors.address}</span>
                </div>

                

                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.licenseNo}
                  error={errors.licenseNo}
                  id="licenseNo"
                  type="text"
                  className={classnames("", {
                    invalid: errors.licenseNo
                  })}
                />
                <label htmlFor="licsenseNo">License Number</label>
                <span className="red-text">{errors.licenseNo}</span>
                </div>


                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.sex}
                  error={errors.sex}
                  id="sex"
                  type="text"
                  className={classnames("", {
                    invalid: errors.sex
                  })}
                />
                <label htmlFor="sex">Sex</label>
                <span className="red-text">{errors.sex}</span>
                </div>



                
                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.specialisation}
                  error={errors.specialisation}
                  id="specialisation"
                  type="text"
                  className={classnames("", {
                    invalid: errors.specialisation
                  })}
                />
                <label htmlFor="specialisation">specialisation</label>
                <span className="red-text">{errors.specialisation}</span>
                </div>


                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.qualification}
                  error={errors.qualification}
                  id="qualification"
                  type="text"
                  className={classnames("", {
                    invalid: errors.qualification
                  })}
                />
                <label htmlFor="qualification">Qualification</label>
                <span className="red-text">{errors.qualification}</span>
                </div>

                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                  value={this.state.contactNo}
                  error={errors.contactNo}
                  id="contactNo"
                  type="text"
                  className={classnames("", {
                    invalid: errors.contactNo
                  })}
                />
                <label htmlFor="contactNo">Contact Number</label>
                <span className="red-text">{errors.contactNo}</span>
                </div>



                <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
                </div>

                <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>


                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
                  </button>
                  <p className="grey-text text-darken-1 mt-2 mb-2">
                  Already have an account? <Link to="/login">Redirect</Link>
                </p>
                </div>

              </form>
              </div>
          
              </Box>
              </div>
              
            </div>
      </div>   
      </div>


    );
  }
}

RegisterDoctor.propTypes = {
  registerDoctor: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerDoctor }
)(withRouter(RegisterDoctor));