const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
let secret = 'mysecret'
router.get('/',(req,res)=>{
    res.send('user accessed palin users route');
})
router.post('/login',(req,res)=>{
    console.log('req.body ===>',req.body);
    let uname = req.body.username;
    let pwd = req.body.password;
    // create token
let secret = 'mysecret'
    jwt.sign({id:uname},secret,{ expiresIn: 60 * 60 },(error,token)=>{
if(error){
    res.status(500).send('Error in generating token');
}else{
    res.cookie('Identity',{authToken:token});
    res.send('user logged in successfull');
}
    })
   
});
router.get('/getUsers',(req,res)=>{
    token = req.cookies.Identity?req.cookies.Identity.authToken:null;
    console.log('token ===>',token);
    jwt.verify(token,secret,(error,verified)=>{
        if(error){
            res.status(500).send('error while validating token');
        }
        else{
            res.status(200).send('users fetched successfully')
        }
    })
    //res.send('User created.')
})
module.exports = router;