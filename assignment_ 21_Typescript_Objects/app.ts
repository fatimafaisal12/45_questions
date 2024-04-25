// Write a program that creates objects using these items

let personName: string = 'Fatima';
const personName_Array : string []= ['person', 'car'];

// Data type of person
interface  person {
    age : number
    name : string
    nationality : string
    student : boolean
    
}
// person object
let person  = {
    age : 19 ,
    name : "Fatima" ,
    nationality : "Pakistan" ,
    student : true
}
//print person
console.log(person);

//Datatype of car
interface car {
maker : string,
color : string,
model_year : number
}

// car object
let car = {
maker : 'Honda',
color : 'Black',
model_year : '2018'
}

//print car
console.log(car);
