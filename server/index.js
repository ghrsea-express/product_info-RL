const express = require('express');
const app = express();
const {getDataById} = require('./db/index.js');
const port = process.env.PORT || 3007;
const path = require('path');

app.use(express.static(__dirname + '/../dist'));

app.get('/image/:id',(req, res)=>{
    getDataById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>(
        res.status(500).send(err)
    ))
})

app.get('*', (req, res)=> {
    res.sendfile(path.join(__dirname,'/../dist/index.html'))
})

app.listen(port, ()=>{ console.log('...listening on port ' + port)});