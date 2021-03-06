// Dependencies ================================================

const express = require("express");
const path = require("path");
const fs = require ("fs");
const { v4: uuidv4 } = require('uuid');
const dbjson = require("./db/db.json");

// Set Up the Express App ======================================

const app = new express()
const PORT= process.env.PORT || 8080;

//Set up the express app to handle data parsing ================

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Notes html route =================================================

app.get("/notes", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
});


//API  GET Routes ===================================================

app.get("/api/notes", (req, res) => {
    res.json(dbjson);
    
});

// API Post Route ===================================================

app.post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    dbjson.push(req.body);
    writeToFile("./db/db.json", JSON.stringify(dbjson));
    console.log(dbjson);
    res.json(dbjson);
});

// API Delete Route

app.delete("/api/notes/:id", (req, res) => {
    console.log(req.params.id);
    for(let i = 0; i < dbjson.length; i++) {
        if (dbjson[i].id === req.params.id) {
            dbjson.splice(i, 1);
        }
    }
    writeToFile("./db/db.json", JSON.stringify(dbjson));
    res.json(dbjson);

});

// Index html route =================================================

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log("App listening on port: " +PORT);
});

// Write To File function ====================================

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log ("Successful");
    });
};