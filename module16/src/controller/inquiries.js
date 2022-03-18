import { connect } from 'react-redux';
import axios from 'axios';

export const mapState = (state) => ({
    inquiries: state.inquiries.list, 
    current: state.inquiries.current,
    doubts: state.inquiries.doubts
});

export const mapDispatch = (dispatch) => ({

    getInq: () => dispatch((dispatch) => {
            console.log("getInquiries")
            
            axios.get('http://localhost:3005/inquiries')
            .then((res) => {
                dispatch({type: "GET_INQUIRIES", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
                console.log("Dispatched getInquiries")
            })
            .catch((err) => {
                dispatch({type: "GET_INQUIRIES_FAILURE", payload: err.message})
                console.log("Dispatched Failure")
            })
        }),
 
    getCourseById: (id) => dispatch((dispatch) => {
        console.log("getCourse By ID")
        
        axios.get(`http://localhost:3005/courses/${id}`)
        .then((res) => {
            dispatch({type: "GET_COURSES_BY_ID", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
            console.log("Dispatched getCourses by ID")
        })
        .catch((err) => {
            dispatch({type: "GET_COURSES_BY_ID_FAILURE", payload: err.message})
            console.log("Dispatched getCourses Failure By ID")
        })
    }),
    addInq: (name, id, email, phone) => dispatch((dispatch) => {
        // console.log("addInquiries(value)", values)
            
        axios.post('http://localhost:3005/inquiries', {name, id, email, phone})
        .then((res) => {
            dispatch({type: "ADD_INQUIRIES", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
            console.log("Dispatched getInquiries")
        })
        .catch((err) => {
            dispatch({type: "ADD_INQUIRIES FAILURE", payload: err.message})
            console.log("Dispatched Failure")
        })
      
    }),

    addDoubts: (name, message) => dispatch((dispatch) => {
        // console.log("addInquiries(value)", values)
            
        axios.post('http://localhost:3005/doubts', {name, message})
        .then((res) => {
            dispatch({type: "ADD_DOUBTS", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
            console.log("Dispatched addDoubts")
        })
        .catch((err) => {
            dispatch({type: "ADD_DOUBTS_FAILURE", payload: err.message})
            console.log("Dispatched Failure")
        })
    }),

    getDoubts: () => dispatch((dispatch) => {
        console.log("getDoubts")
        
        axios.get('http://localhost:3005/doubts')
        .then((res) => {
            dispatch({type: "GET_DOUBTS", payload: res.data}) //payload: all the data sent with dispatch, its the data itself
            console.log("Dispatched getDoubts")
        })
        .catch((err) => {
            dispatch({type: "GET_DOUBTS_FAILURE", payload: err.message})
            console.log("Dispatched Failure")
        })
    }),

});


export const connector = (Component)  => connect(mapState, mapDispatch)(Component)

export const inquiryReducer = (
    state = {list: [], current: null, doubts: []},
    action
) => {
    switch (action.type) {
        case "GET_INQUIRIES":
            console.log("Reducer getInquiries")
            return {
                ...state,
                list: action.payload
            };
        case "GET_INQUIRIES_FAILURE":
            return {
                ...state,
                list: "Failure"
            };
        case "ADD_DOUBTS":
            console.log("Reducer addDoubts")
            return {
                ...state,
               
            };
        case "ADD_DOUBTS_FAILURE":
            return {
                ...state,
                
            };
            case "GET_DOUBTS":
            console.log("Reducer addDoubts")
            return {
                ...state,
                doubts: action.payload
            };
        case "GET_DOUBTS_FAILURE":
            return {
                ...state,
                doubts: "Failure"
            };
        case "GET_COURSES_BY_ID":
            console.log("Reducer getCourses")
            return {
                ...state,
                current: action.payload
            };
        case "GET_COURSES_BY_ID_FAILURE":
            return {
                ...state,
                current: "Failure"
            };
        default:
            return state;
    }
};

