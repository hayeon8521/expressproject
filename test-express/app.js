const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Server Connect');
});

app.listen(3000, ()=>{
    console.log('서버가 실행됩니다');
    console.log('http://localhost:3000');
    
});