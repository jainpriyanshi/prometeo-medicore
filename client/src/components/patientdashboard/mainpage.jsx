import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


export default class mainpage extends Component {

    constructor() {
        super();
        this.state = {
          array: []
        };
      }

     componentDidMount() {
        console.log("hey");
        axios.get('/api/doctors')
        .then((response) => {
            console.log(response.data)
            this.setState({array : response.data});
        });
       }
  
       fetch_doctor() {

         return this.state.array.map(arr =>{
          return (
                 <div class="row">
                     <br />
                 <div class="card container col-lg-4">
                         <br />
                         <b> Name : {arr.name} </b>
                         <br />
                         <p> Contact No: {arr.contactNo}</p>
                         <p> Address: {arr.address}</p>       
                         <p> Specialisation : { arr.specialisation} </p> 
                         <p> Qualifiaction: {arr.qualification}</p>
                         <p> Gender: {arr.sex} </p>  
                         <p> Fee : 250  </p>  
                         <button
                            style={{
                                width: "300px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                marginTop: "2rem"
                            }}
                            type="submit"
                            className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                        >
                            Book Appointment
                            </button>
                            <br />
                 </div>
                 </div>
          )});
       }
    render() {
        return (
            <div style={{ marginTop: "100px"}}>
                  <div class="row">
                  
                      <div class="col-lg-12"> 
                      <Link to ="/profile/5e1b0534290b44038035147e">
                      <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-small auto waves-effect waves-light hoverable blue accent-3"
                 >
                     
                 Prescriptions
                </button>
                </Link>
                       {this.fetch_doctor()}
                      </div>
                  
                  </div>
            </div>
        )
    }
}
