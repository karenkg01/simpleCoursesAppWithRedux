const {InquireModel, CourseModel, DoubtsModel} = require('./schema');
const defaultCourses = require('./defaultCourses');

// CourseModel.create(defaultCourses)


module.exports = {
   
     getCourses: async (req,res)=> {
        try{
            const data = await CourseModel.find({})
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
     addInquiry: async (req,res)=> {
        try {
            await InquireModel.create({name: req.body.name, course_id: req.body.id, email: req.body.email, phone: req.body.phone})
            res.status(200).send("inquiry created")
        } catch (err) {
            res.status(500).json(err)
        }
     },
     addDoubts: async (req,res)=> {
        try {
            await DoubtsModel.create({name: req.body.name, message: req.body.message})
            res.status(200).send("inquiry created")
        } catch (err) {
            res.status(500).json(err)
        }
     },
     getDoubts: async (req,res)=> {
        try{
            const data = await DoubtsModel.find({})
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
     getInquiry: async (req,res)=> {
        try{
            const data = await InquireModel.find({})
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
     getCoursesById: async (req,res)=> {
        try{
            const data = await CourseModel.findById(req.params.id)
             res.status(200).json(data)
        }catch(err){
            res.status(500).json(err)
        }
     },
    //  updateToDo: async (req,res)=> {
    //     try{
    //         const updatedToDo = await ToDoModel.findByIdAndUpdate(req.params.id, req.body)
    //          res.status(200).json(updatedToDo)
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    //  },

     reset: async (req,res)=> {
        try{
           await InquireModel.deleteMany({});
           await CourseModel.deleteMany({});
           await CourseModel.create(defaultCourses)
             res.status(200).send("reset")
        }catch(err){
            res.status(500).json(err)
        }
     }
}