import React from 'react';
import {Link} from "react-router-dom"; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
       <AppBar position="static" style={{marginTop: "150px" , backgroundColor:"white",width:"100%", align:"left" , float: "down"}}>
        
           
             <Typography>
                 <p style={{fontFamily: "roboto" , fontSize : '30px' , color:  "green" , marginLeft: "30px"}}> MediCore</p>
             </Typography>
             
             <Typography>
                 <p style={{fontFamily: "roboto" ,color:  "grey" , marginLeft: "30px"}}> Created By Priyanshi , Parul , Shreya </p>
             </Typography>
        </AppBar>
    </div>
  );
}

export default Navbar;