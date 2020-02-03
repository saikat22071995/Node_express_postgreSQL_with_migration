const express=require('express')
const app=express()
app.use(express.json())
const PORT=5001
const Models=require('./models')
const Sequelize=require('sequelize')
const router=require('./config/routes')


Models.sequelize.sync({
    force:false,
    logging:console.log
})
.then((response)=>{
    console.log('Nice Database Looks Fine')
})
.catch((err)=>{
    console.log(err)
})


//Root file
app.get('/',(req,res)=>{
    res.send('Hi welcome to Sequilize')
})

// USING Routes
app.use('/',router)

app.listen(PORT,()=>{
    console.log('Listening on port',PORT)
})

