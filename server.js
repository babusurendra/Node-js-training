const express = require('express');
 const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
 app.use(bodyParser());
const userRoutes = require('./routes/user.routes');
const empRoutes = require('./routes/emp-routes');
const service = require('./services/fetch-users');
// const crudRoutes = require('./routes/crud-routes');
 mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/users',userRoutes);
app.use('/emp',empRoutes);
//app.use('/crudRoutes',crudRoutes);
app.get('/posts',service.fetchPosts)
app.listen(3500, (error, success) => {
    if (error) {
        console.log('error while starting server');
        return;
    }
    console.log('server started !!')
});