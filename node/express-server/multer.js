const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
  //저장경로
  destination : function(req, file, cb){
    cb(null, 'uploads/'); //내가 업로드 폴더 직접 생성해야함
  },
  //파일이름
  filename : function(req, file, cb){
    //한글깨짐 막는거
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
    //파일 이름 설정 및 업로드
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

//싱글 파일 업로드
//avatar / photos 키를 이용하여 단건 , 여러건 처리
app.post('/profile', upload.single('avatar'), (req, res)=>{
  console.log(req.file);  //단건 file
  console.log(req.body);
});

//다중 파일 업로드 //upload.array('photos', 12) 최대값 지정해서 필요한 갯수만큼만 업로드가능
app.post('/photos', upload.array('photos', 12), (req,res)=>{
  for(let file of req.files){ //여러건 files
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})