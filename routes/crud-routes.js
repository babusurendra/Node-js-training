const express = require('express');
const router = express.Router();
const userController = require('../controllers/crud-controller');
router.get('/createUsers',userController.createUser);
router.get('/updateUser',(req,res)=>{
    res.send('user accessed EMP names route');
});
router.post('/deleteUser',(req,res)=>{
    res.send('Emp created.')
})
router.get('/shouwUsers',(req,res)=>{

});

module.exports = router;