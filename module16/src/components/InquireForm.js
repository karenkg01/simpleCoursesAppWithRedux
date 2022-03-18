import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { connector } from '../controller/inquiries';


const InquireForm = (props) => {

    const navigate  = useNavigate();
 
    // const [data, setData] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();



    const handleSubmit = (e)=> {
        e.preventDefault();
        props.addDoubts(name, message);
    }

    return (
      <form onSubmit={handleSubmit}>
        <h1>inquirie Form</h1>
            {/* <p>{data.description}</p> */}
            <div className="form-group">
                <label for="name" className="form-label">Name</label>
                <input value={name} type="text" className="form-control" id="name" onChange={(e)=> setName(e.target.value) } />
            </div>
            <div className="form-group">
                <label for="message" className="form-label">message</label>
                <textarea value={message} className="form-control" id="message" rows="3" onChange={(e)=> setMessage(e.target.value) }></textarea>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
           
        
    );
}

export default connector(InquireForm);

