// imports 
const express = require('express');
const fs = require('fs');
const api = require('./Develop/routes/route');
const path = require('path');
const noteData = require('./Develop/db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
 






app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
