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

//API route
app.get("/api/fun-fact", async(req,res) =>{
    console.log('fetching the data and sending it to the client');
})

//PORT
app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
});