import express from 'express';

const app=express();

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/',(req,res)=>{

res.render('index',{initialContent:23});

})

app.listen('8081',function listenHandler(){
    console.log('server is up and running on 8081');
}); //configure port
