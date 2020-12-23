const { static } = require('express');
const express= require('express');
const { stat } = require('fs');
const app=express()
const path=require('path')
const Port=80


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const staticPath=path.join(__dirname, '../public')

//Built-in  middleware
app.use(express.static(staticPath))



app.get('/',(req,res)=>{
    // res.write('<h1>home page</h1>')
    // res.write('<h1>about page</h1>')
    res.send('hello');
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(Port,()=>{
    console.log('listening ON PORT 80')
})



    //Json File serving 
    // app.get('/temp',(req,res)=>{
    //     res.send([{
    //         nam:'shoukat',
    //         age:18,
    //             },
    //             {
    //         nam:'shoukat',
    //         age:18,
    //             },
    //             {
    //         nam:'shoukat',
    //         age:18,
    //             },
    //             {
    //         nam:'shoukat',
    //         age:18,
    //             },
    //         ])
    //     })
    // app.get('/temperature',(req,res)=>{
    //     res.send({
    //      )
    // })