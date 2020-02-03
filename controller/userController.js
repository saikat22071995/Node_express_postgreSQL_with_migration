


const Models=require('../models')

//@to list all the users

module.exports.list=(req,res)=>{
    Models.User.findAll({})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to List 1 USer

module.exports.show=(req,res)=>{
    const id=req.params.id
    Models.User.findOne({where:{id:id}})
    .then((user)=>{
        if(user){
            res.json(user)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to create a user

module.exports.create=(req,res)=>{
    const body=req.body
    const user=new Models.User(body)
    //console.log(user)
    //user.user=req.user._id
    user.save()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        console.log(err)
    })

}

//@to update a user

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Models.User.update(body,{where:{id:id}})
    .then((user)=>{
        if(user){
            Models.User.findOne({where:{id:id}})
            .then((user)=>{
                res.json(user)
            }) 
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to delete a user

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Models.User.destroy({where:{id:id}})
    .then((user)=>{
        if(user){
            res.status('200').send({notice:'User Deleted Successfully'})
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}









// app.get('/users',(req,res)=>{
//     Models.User.findAll()
//     .then(user=>{
//         res.status('200').send(user)
//     })
// })


// app.post('/users',(req,res)=>{
//     const body=req.body
//     const user=new Models.User(body)
//     //console.log(user)
//     user.save()
//     .then((user)=>{
//         res.send(user)
//     })
//     .catch((err)=>{
//         res.send(user)
//     })
// }