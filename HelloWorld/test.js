console.log('Test')

let message = "Hello";
console.log(message)

message = 12
console.log(message)

//3 types of variables 
const name = 'RITKA'
console.log(name)
// name = 12 -> error TypeError: Assignment to constant variable.
// console.log(name)

let name1
console.log(name1)

const pashka = {
    love: 100000,
    sleep: 1000
}
const ritka  = {
    meow: pashka
}
console.log(ritka)
console.log(typeof message) 

//math 

let s = "my" + "string"
console.log(s)

//let result = (a + b < 4) ? 'Below' : 'Over'

let age = 34
if (age >= 14 &&  age <= 90){
    console.log("true")
}else{
    console.log("false")
}

if (age <= 14 || age >= 90){ //or !(age >= 14 &&  age <= 90)
    console.log("true")
}else{
    console.log("false")
}


//loops tasks 
//1
for (let i = 2; i < 11; i++){
    console.log(i)
}

//2
let i = 2
while (i < 11){
    console.log(i)
    i++
}

//3
let checkedNum;
do{
    checkedNum = ("please type any number", 0);
}while(checkedNum <= 100 && checkedNum);

//4
console.log("-------")
let n = 30
nextPrime:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime
      }
    
      console.log(i)
}