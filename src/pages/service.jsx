import React from "react";
import DragDrop from "../components/DragDrop";
import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <div>
            <p></p>
          <div><DragDrop /></div>
          <div>
            <p style={{fontFamily:'revert-layer',fontStyle:'italic',fontSize:'x-large',textAlign:'center'}}>Like to experiance more click <strong>Below</strong> get Sign In or Sign Up</p>
            <Link to='/SignUp'>
            <button type="button" className="btn-7 custom-btn7 " style={{marginLeft:'700px'}}>Get Started</button>
            </Link>
          </div>
        </div>
    );
    };

export default Service;