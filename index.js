const express = require('express')
let bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mapage', (req, res) => {
  res.send('Salut les loulous! Vous voici sur la page de Mr G')
})

app.get('/mon-formulaire', function(req, res) {
  res.sendFile( __dirname  + '/page.html');
});

app.post('/traitement-formulaire', (req, res, next) => {

    try {
      let p1 = req.body.name; 
      res.send(p1);
    } catch (err) {
      next(err)
    }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})