const express = require('express');
const mailsend = require('./mailsend')
const  app = express();

app.get('/', (req,res)=>{
    res.send("welcome to my api")
})

app.post('/mail', (req,res)=>{
    try {
        mailsend()
        //res.send("tried to send mail")
    } catch (error) {
        res.send(error)
    }

})

const port  =  4040
app.listen(port , console.log(`the server running on port ${port}`))
