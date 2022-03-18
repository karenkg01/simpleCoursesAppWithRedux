import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connector } from '../controller/courses';

const Course = (props) => {

    return (

        <div className="card">
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link to={`/inquire/${props._id}`} ><button className="btn btn-primary">Inquire</button></Link>
            </div>
        </div>

    );
}

const Courses = (props) => {

    // const [data, setData] = React.useState();

    React.useEffect(() => {

       props.getCourses();

    }, [])

    return (
        < div className="courses">
            <h1>Courses</h1>
            {props.courses && props.courses.map(x => <Course {...x} />)}
        </div>
    );
}

export default connector(Courses);

// Build a course list application with basic React concepts and Rest API.
// Follow the below mentioned steps to build the application
//a)Make use of JSON server to create a static API (containing courses JSON data)
//b)Under each course there must be enquire button
//c)On clicking enquire button, a form should be displayed. Here user should be able to type their details
// d)On clicking the submit button the user information should be added to json file
//e)Create one more route to display the user enquires