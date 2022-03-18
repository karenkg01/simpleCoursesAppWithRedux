import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connector } from '../controller/inquiries';

const Inq = (props) => {

    const [data, setData] = useState();


    useEffect(() => {

        axios.get(`http://localhost:3005/courses/${props.course_id}`).then((response) => {
            setData(response.data);
            console.log(response);
        })

    }, [])


    return (
        <div className="card">
            <div className="card-body">
                <h3>{props.name}</h3>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <p>{data && data.title}</p>
            </div>
        </div>

    );
}


const Doubt = (props) => {

 

    return (
        <div className="card">
            <div className="card-body">
                <h3>{props.name}</h3>
                <p>{props.message}</p>
              
            </div>
        </div>

    );
}


const Data = (props) => {

    // const [data, setData] = useState();


    useEffect(() => {

        props.getDoubts();
        props.getInq();

    }, [])


    return (
        <>
            < div className='courses'>
            <h1>User Details</h1>
            {props.inquiries && props.inquiries.map(x => <Inq {...x} />)}
        </div>
        < div className='courses'>
            <h1>User Doubts</h1>
            {props.doubts && props.doubts.map(x => <Doubt {...x} />)}
        </div>

        </>
        
        

    );
}

export default connector(Data);

