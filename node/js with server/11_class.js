// 11_class.js

//생성자 함수
function User(name, age, city){
   this.name = name;
   this.age = age;
   this.city = city;
   this.getInfo = () => {
      return `${this.name}, ${this.age}, ${this.city}`;
   }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong.getInfo());

let kim= new User("Kim", 25, "Jeju");
console.log(kim.getInfo());


// class 문법으로 바꾸기
class Emp {
   constructor(id, name, dept){
      //해당 클래스가 가지는 필드 등록 (기본생성자)
      // 변수 앞에 언더바 쓰면 그건 private 로 사용한다는거 직접 호출 불가
      this._id = id;
      this._name = name;
      this._dept = dept;
   }
   //필드를 선언하는 하나의 방식 (필드에 접근 할수있는 새로운 형태의 방식)
   //가짜 필드 만들어서 접근하는 방식
   get id(){
      return this._id;
   }
   set name(name){
      this._name = name;
   }
   get name(){
      return this._name;
   }

   //getter, setter 만들기들어서(메소드) 접근하는 방식
   setDept(dept){
      this._dept = dept;
   }
   
   getDept(){
      return this._dept;
   }

}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; //받아올 생성자가 없음
kang.setDept("Marketing");
console.log(kang);   //결과 => Emp { _id: 100, _name: 'Kang', _dept: 'Marketing' }

kang.name = "표하연";
kang._id = 200;
console.log(kang);   //결과 => Emp { _id: 200, _name: '표하연', _dept: 'Marketing' }