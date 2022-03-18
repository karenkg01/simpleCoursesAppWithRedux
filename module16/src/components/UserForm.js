import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connector } from '../controller/inquiries';


const UserForm = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    // const [data, setData] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        if (id) {
            props.getCourseById(id);
        }
    }, [id])

    useEffect(() => {

        console.log("FORM PROPS", props)

    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addInq(name, id, email, phone);
    }

    return (
        <>
            {props.current &&
                <>
                    <form onSubmit={handleSubmit}>
                        <h1>inquirie Form</h1>
                        <h2>{props.current.title}</h2>
                        {/* <p>{data.description}</p> */}
                        <div className="form-group">
                            <label for="name" className="form-label">Name</label>
                            <input value={name} type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" value={email} className="form-control" id="email" rows="3" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" value={phone} className="form-control" id="phone" rows="3" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </>
            }
        </>
    );
}

export default connector(UserForm);

