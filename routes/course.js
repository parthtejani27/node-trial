const express = require('express')
const router = express.Router()

courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
]

router.get('/',(req,res)=>{
    res.send(courses)
})

router.get('/:id',(req,res)=>{

    // console.log(typeof(parseInt(req.params.id)))
    const course = courses.find(c =>c.id === parseInt(req.params.id))
    // console.log(course)
    if(!course){
        return   res.status(404).send('no data found')
    }else{
        res.send(course)
    }
})

router.post('/',(req,res)=>{

    const schema = {
        name:Joi.string().min(3).required().validate(req.body.name)
    }
   

    console.log(schema)
    if(schema.name.error){
        res.status(400).send(schema.name.error.details[0].message)
        return
    }else{

    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(courses)

}
})

router.put('/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id))
    // console.log(req.params)
    if(!course){
       return res.status(404).send('no data found')
    }

    const schema = {
        name:Joi.string().min(3).required().validate(req.body.name)
    }

    // console.log(schema)
    if(schema.name.error){
        res.status(400).send(schema.name.error.details[0].message)
        return
    }
    

    course.name = req.body.name
    res.send(course)
})

router.delete('/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id))
    // console.log(req.params)
    if(!course){
        return res.status(404).send('no data found')
    }
    

    const index = courses.indexOf(course)
    courses.splice(index,1)
    
    
    res.send(courses)
    
})

module.exports = router