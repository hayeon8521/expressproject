// 07_Destructuring.js
// 묶여진걸 하나하나 다른 변수로 만들어버리는거

// 1) Object Destructuring
let person = {
   firstName : "John",
   lastName : "Doe",
   age : 37,
   email : "john@gmail.com",
   country : "USA"
};

//포인트 = 중괄호 , 필드명과 동일한 변수로 적어줘야함
//필요한 필드명을 중괄호 안에 선언
let {lastName, email} = person;
console.log(lastName);
console.log(email);

function getFullName( {firstName, lastName} ){
   console.log(`${lastName}, ${firstName}`);
   //return `${lastName}, ${firstName}`;
}
getFullName(person); //매게 변수로 값을 넘길수도있음


// 2) Array Destructuring
//포인트 = 대괄호, 원하는 변수명으로
// 순차적으로 하나씩 가져와서 변수에 집어 넣는다
let scores = [70,80,90];
let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);

function getFullName2( [d, e ,f] ){
   console.log(d);
   console.log(e);
   console.log(f);
}
getFullName2(scores);