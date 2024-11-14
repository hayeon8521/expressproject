//app.js
const express = require('express');
const app = express();
const mysql = require('./mapper.js');  //맵퍼 사용하도록 호출

// content-type : application/json
app.use(express.json());

app.listen(3000, ()=>{
   console.log('Server Start');
   console.log('http://localhost:3000');
});

//라우팅들 만드는거
//전체조회
app.get('/customers', async (req, res)=>{
   let list = await mysql.query('customerList');
   res.send(list);
});

//단건조회
app.get('/customers/:id', async(req, res)=>{
   let selected = req.params.id;
   //1건이든 여러건이든 배열로 돌려줘서 배열 깨야함
   //배열의 1번째값만 돌려줌
   let info = (await mysql.query('customerInfo', selected))[0];
   res.send(info);
});

//등록
app.post('/customers', async(req, res)=>{
   let newObj = req.body;
   let list = await mysql.query('customerInsert', newObj);
   res.send(list);
});

//수정
app.put('/customers/:id', async(req, res)=>{
   let array = [];
   let selected = req.params.id;
   let selectedbody = req.body;
   array.push(selectedbody,selected);
   let list = await mysql.query('customerUpdate', array);
   res.send(list);
});

//삭제
app.delete('/customers/:id', async(req, res)=>{
   let selected = req.params.id;
   let info = await mysql.query('customerDelete', selected);
   res.send(info);
});