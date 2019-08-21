const express = require('express');
const app = express();
const {getDataById} = require('./db/index.js');
const port = 3000;

app.use(express.static(__dirname + '/../dist'));
app.listen(port, ()=>{ console.log('...listening on port 3000')});
app.get('/:id',(req, res)=>{
    getDataById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>(
        res.status(500).send(err)
    ))
})
