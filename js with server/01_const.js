// js with server/01_const.js
const count = 0;

//var count = 10;
//count = 10;
console.log(count);

const user = {
  "id" : "user01",
  "name" : "Hong"
}

user.id = "mgro01";
user.name = "Kang";
user.ssn = "981015";
console.log(user); //객체 값 변경 가능

user = {};
console.log(user);  //객체 값은 변경되지만 객체 자체를 변경할 수는 없다.