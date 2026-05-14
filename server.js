//DEPENDENCIES
//import the Express library
const express = require("express");

//APP CONFIGURATION
//create an Express application object
const app =express();

//define the port number
const PORT =3000;

//MIDDLEWARE
//ROUTES
//Test route to verify the server is working
app.get("/test", (req,res) =>{
    res.send("testing..");
});

//PORT
app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
});