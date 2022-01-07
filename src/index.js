require('dotenv').config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const productRoute = require("./routes/productRoute");
const employeeRoute = require("./routes/employeeRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use("/product",productRoute);
app.use("/employee",employeeRoute);

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});


