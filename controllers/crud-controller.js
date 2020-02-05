const users = require('../models/user-model');
module.exports = {
    'createUser':(req,res)=>{
        users.create({'name':'nodejs','age':100}).then((users)=>{
            res.send(users);
        })
    },
    'updateUser':(req,res)=>{
        users.updateOne({name:'surendra'},{$set:{age:30}},).then((result)=>{
          res.send(result);
        })
    },
    'deleteUser':(req,res)=>{
        users.deleteOne({age:100}).then((result)=>{
           res.send(result);
        })
    },
    'showUsers':(req,res)=>{
        users.find({}).then((result)=>{
           res.send(result);
        })

    }
}