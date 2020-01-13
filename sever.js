const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const empRoutes = require('./routes/emp-routes')
function middleware1(req,res,next){
    console.log('in middleware 1');
    next();
}
function middleware2(req,res,next){
    console.log('in middleware 2');
    next();
}
function middleware3(req,res,next){
    console.log('in middleware 3');
    next();
}
// midArray = [] ;
// midArray.push(middleware1);
// midArray.push(middleware2);
// midArray.push(middleware3);
// [middleware1,middleware2,middleware3]
app.use('/users',userRoutes);
app.use('/emp',empRoutes);
app.listen(3500, (error, success) => {
    if (error) {
        console.log('error while starting server');
        return;
    }
    console.log('server started !!')
});