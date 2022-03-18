import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Data from './components/Data';
import UserForm from './components/UserForm';
import NotFoundPage from './components/NotFoundPage';
import Courses from './components/Courses';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store';
import InquireForm from './components/InquireForm';


function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/courses" element={<Courses />}  />
            <Route path="/inquire/:id" element={<UserForm />}  />
            <Route path="/inquiries" element={<Data />}  />
            <Route path="/newinquiry" element={<InquireForm />}  />
            <Route path="*" element={<NotFoundPage />}  />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </ReduxProvider>
    
  );
}

export default App;
