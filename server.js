// imports 
const express = require('express');
const path = require('path');
const api = require('./routes/routes')


const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

api.use(express.static('public'));


// Route Get notes api
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Default route to HOME page, ( should be in the end, otherwise will throw err)
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
