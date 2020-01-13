const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('user accessed palin EMP route');
})
router.get('/getEmpNames',(req,res)=>{
    res.send('user accessed EMP names route');
});
router.post('/createEmp',(req,res)=>{
    res.send('Emp created.')
})
module.exports = router;