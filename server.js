//DEPENDENCIES
//import the Express library
const express = require("express");

//import the axios http client
const axios = require("axios");

//APP CONFIGURATION
//create an Express application object
const app = express();

//define the port number
const PORT = 3000;

//MIDDLEWARE
//ROUTES
//Test route to verify the server is working
app.get("/test", (req, res) => {
    res.send("testing..");
});

//API route
app.get("/api/fun-fact", async (req, res) => {
    console.log('fetching the data and sending it to the client');
    try {
        //2. await the axios GET request
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
       
        //3. the data is already parsed and available in response.data
        res.json(response.data);
    } catch (error) { 
        //4. this single catch handles everything
        //- network errors
        //- http status errors
        if(error.response) {
            //The request was made and the server responded with a status code
            console.error('API Error:', error.response.status, error.response.data)
            res.status(error.response.status).json({message :'Error fetching the data from external API.'});
        } else {
            //Something happned in setting up the request that triggered an error
            console.error('Network Error:', error.message);
            res.status(500).json({message: 'A network error occured.'});
        }
    }

})

//PORT
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});