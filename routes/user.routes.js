const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('user accessed palin users route');
})
router.get('/getUserNames',(req,res)=>{
    res.send('user accessed user names route');
});
router.post('/createUser',(req,res)=>{
    res.send('User created.')
})
module.exports = router;