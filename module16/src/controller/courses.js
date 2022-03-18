import { connect } from 'react-redux';
import axios from 'axios';

export const mapState = (state) => ({
    courses: state.courses.list
});

export const mapDispatch = (dispatch) => ({

    getCourses: () => dispatch((dispatch) => {
            console.log("getCourses")
            
            axios.get('http://localhost:3005/courses')
            .then((res) => {
                dispatch({type: "GET_COURSES", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
                console.log("Dispatched getCourses")
            })
            .catch((err) => {
                dispatch({type: "GET_COURSES_FAILURE", payload: err.message})
                console.log("Dispatched Failure")
            })
        }),

});


export const connector = (Component)  => connect(mapState, mapDispatch)(Component)

export const courseReducer = (
    state = {list: [], current: null},
    action
) => {
    switch (action.type) {
        case "GET_COURSES":
            console.log("Reducer getCourses")
            return {
                ...state,
                list: action.payload
            };
        case "GET_COURSES_FAILURE":
            return {
                ...state,
                list: "Failure"
            };
        
        default:
            return state;
    }
};

