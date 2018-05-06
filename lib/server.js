const express = require('express')

const app=express();

app.use(express.static('public'))

app.listen('8080',function listenHandler(){
    console.log('server is up and running on 3000');
}); //configure port
