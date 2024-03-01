const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const app = express();
env.config({
    path: './my-base-pathcheck/.env'
});
app.use(cors());
// serve up production assets

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

const basepath = process.env.REACT_APP_BASEPATH;

app.get('/',(req,res)=>{
    res.send("Api is running");
});

app.use(express.static('./my-base-pathcheck/build'));
app.use(basepath,require("./routes/reactRouter"));
app.use("/api",require("./routes/apiRouter"));

// if not in production use the port 5000
const PORT = 5000;


console.log('server started on port:',PORT);
app.listen(PORT);