const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const app = express();
const path = require('path');
env.config({
    path: './my-base-pathcheck/.env'
});
app.use(cors());
// serve up production assets

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

const basepath = process.env.REACT_APP_BASEPATH;

app.use("/api",require("./routes/apiRouter"));
app.use(express.static('./my-base-pathcheck/build'));
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'my-base-pathcheck', 'build', 'index.html'));
});

app.use('/deep',require("./routes/reactRouter"));

// if not in production use the port 5000
const PORT = 5000;


console.log('server started on port:',PORT);
app.listen(PORT);