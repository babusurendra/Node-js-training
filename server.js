const express = require('express');
 const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(cookieParser());
 app.use(bodyParser());
const userRoutes = require('./routes/user.routes');
const empRoutes = require('./routes/emp-routes');
app.use('/users',userRoutes);
app.use('/emp',empRoutes);
app.listen(3500, (error, success) => {
    if (error) {
        console.log('error while starting server');
        return;
    }
    console.log('server started !!')
});