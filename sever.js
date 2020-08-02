// Dependencies ================================================

const express = require("express");
const path = require("path");
const fs = require ("fs");

// Set Up the Express App ======================================
const app = express()
const PORT= 8080; 

//Set up the express app to handle data parsing ================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));


// Html routes 
app.get("/notes.html", (req, res)) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
}


//API  GET Routes


// API Post Route


// API Delete Route

