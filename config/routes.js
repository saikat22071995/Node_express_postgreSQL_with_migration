const express=require('express')
const router=express.Router()

const userController=require('../controller/userController')

//@user API

router.get('/users',userController.list) //Get all the users
router.get('/users/:id',userController.show) //Get user by id
router.post('/users',userController.create) //Create a user
router.put('/users/:id',userController.update) //Updating a user
router.delete('/users/:id',userController.destroy) //Deleting a user


module.exports=router
