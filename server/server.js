const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 4000;
const controller = require('./controllers/characterController');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/characters', controller.create); //Create new character and assign unique id.
// app.get('/api/characterList', controller.read); //See lists of created characters
app.get('/api/characters/:name', controller.read); //See specific character detail
app.put('/api/characters/:id', controller.update); //Change something on character sheet and save same id
// app.put('/api/character/:id', controller.levelUp); //Level up character and save same id
app.delete('/api/characters/:id', controller.delete); //Delete character with specific id


//*************************************************************/
app.listen(port, ()=>{
    console.log(`That's no moon! It's a port ${port}`)
})