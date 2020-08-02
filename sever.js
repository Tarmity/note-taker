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


// Notes html route =================================================

app.get("/notes.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
});

// Index html route =================================================

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

//API  GET Routes

app.get("/api/notes.html", (req, res) => {
    req.body.id = uuidv4();
    dbjson.push(req.body);
    writeToFile(".db/db.json", JSON.stringify(dbjson));
    console.log(dbjson);
    res.json(dbjson);
});


// API Post Route


// API Delete Route


// Write To File function ====================================

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log ("Successful");
    });
}