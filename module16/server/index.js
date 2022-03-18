const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courses');
const port = 3005;
const app = express();
const cors = require('cors');
const controllers = require('./controller');  //controllers is an object to use do controller.deteToDo

app.use(cors());
app.use(express.json());

app.get('/courses', controllers.getCourses);
app.get('/courses/:id', controllers.getCoursesById);
app.get('/reset', controllers.reset);
app.post('/inquiries', controllers.addInquiry);
app.get('/inquiries', controllers.getInquiry);
app.post('/doubts', controllers.addDoubts);
app.get('/doubts', controllers.getDoubts);
// app.post('/todo', controllers.addToDo);
// app.delete('/todo/:id', controllers.deleteToDo);
// app.put('/todo/:id', controllers.updateToDo);

// app.get('/reset', controllers.reset);

app.listen(port, ()=>{
    console.log("Server is running on port "+ port)
})

module.exports = app

