/* // let, const have a block-level scope

const score = 10;
score = 20 
//console.log(score); yeilds error
//use const when know you're not gonna reasign variable

let age = 30
age = 31; //console.log(age); works. Use for reasignment
console.log(age); */




//STRINGS, NUMBERS, BOOLEAN, NULL, UNDERFINED

let fname = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const xx = null;//'object' is incorrect, will explain later
const yy = undefined;
let z; 
console.log(typeof rating);

  //CONCATENATION

  /* let fname = 'John';
  const age = 30;
  console.log('My name is ' + fname + ' and I am ' + age);
  //TEMPLATE STRINGS ARE BETTER
  console.log(`My name is ${fname} and I am ${age}`);
  const hello = `My name is ${fname} and I am ${age}`;
  console.log(hello); */

  //A FEW STRING METHODS AND PROPERTIES

    //LENGTH 
    const s = 'hello world!';
    const s2 = 'helloworld!';
    const s3 = 'NO CAP';
    const s4 = 'allow me to introduce myself'
    console.log(s.length);
    console.log(s2.length); 
    //SUBSTRING
    console.log(s2.substr(0,5));//from the FRONT
    console.log(s.substr(5));//from the END
    console.log(s2.substr(5));//from the END
    console.log(s.substr(6,5));//from the middle
    console.log(s2.substr(5,5));//from the middle
    //UPPERCASE & LOWERCASE
    console.log(s.toUpperCase());
    console.log(s3.toLowerCase());
    //SPLIT
    console.log(s.split(''));
    console.log(s2.split(''));
    console.log(s4.split(''));
    console.log(s4.split(' '));
    
  //ARRAY - variables that hold multiple 

  const mixmasala = [4,'music', 45, 'rain', 0.5, false]
  const fruits = ['apples', 'oranges', 'pears'];
  console.log(fruits);
  const arrayPrnt = `The first array element is: \n ${fruits[0]}
The second array element is: \n ${fruits[1]}
The third array element is: \n ${fruits[2]}`
  console.log(arrayPrnt);

  fruits[2] = 'rasberry';//assignment
  console.log(fruits);
  fruits.push('mangoes');//add to end of array
  console.log(fruits);
  fruits.unshift('grapes');//add to beginning of array
  console.log(fruits);
  fruits.pop();//removes element @ end of array
  console.log(fruits);
  console.log(Array.isArray(fruits));
  console.log(Array.isArray(mixmasala));
  console.log(`index of oranges is ${fruits.indexOf('oranges')}`)

//OBJECT LITERALS (KEY VALUE PAIRS)

const rapper = {
  firstName: 'John',
  lastName: 'Doe',
  stageName: 'Doe Boy',
  awards: ['Grammy', 'BET'],
  invoiceRates: {
    walkthru: 3000.00,
    fullset: 30000.00,
    feature: 10000.00,
  }


}
 //ADD PROPERTIES
 rapper.ghost = 'true';
 console.log(rapper)
const rapProfile = 
`Artist: ${rapper.stageName}
Real Names:${rapper.firstName} ${rapper.lastName}
Achievements:${rapper.awards}
Rates: walk-through=R${rapper.invoiceRates.walkthru}
       full set=R${rapper.invoiceRates.fullset}
       feature=R${rapper.invoiceRates.feature}`;

console.log(`Profile with .ghost property added: ${rapProfile}`);

 

  //DESTRUCTURING
  console.log('DESTRUCTURING');
  const {stageName, awards, invoiceRates: {feature}, ghost} = rapper;
  console.log(`What are ${stageName}'s awards: ${awards[1]}`);
  console.log(`How much does ${stageName} charge for a feature?: R${feature}`);
  console.log(`Does ${stageName} have a ghostwriter?: ${ghost}`);

  //ARRAYS OF OBJECTS
  const toDos = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true
    },
    {
      id:2,
      text: "Meeting with boss",
      isCompleted: true
    },
    {
      id:3,
      text: "Dentist appt",
      isCompleted: false
    }
  ];

  //console.log(toDos);
  console.log(`Index element of object array: e.g.
              printing text element from 2nd object is: ${toDos[1].text}`);

  //JSON: SENDING DATA TO A SERVER
  console.log('JSON:');
  const toDoJSON = JSON.stringify(toDos);
  console.log(toDoJSON);

  //FOR LOOP
    /* console.log('for()'); */
    //w/CONDITION
    /* for(initialise; condition; increment){
          code here;
      }
  */
      console.log(`for() without condition`);
    //without CONDITION
      /*SIDE NOTE: We made the mistake of using 'in' 
      instead of 'of'. 'of' is for objects
                      'in' is for strings*/ 
     for (let tasks of toDos){
       console.log(tasks.text);
     }

     //forEach, map, filter
    /* toDos.forEach(function(tasks){
       console.log(tasks.text);
     }); */

     /* --- .map returns an ARRAY ---*/
     const toDoText = toDos.map(function(tasks){
       return tasks.text;
     });
     console.log(`.map:${toDoText}`);

     /* --- .filter returns objects/elements
      that have met a condition --- */
      const toDoCompleted = toDos.filter(function(tasks){
        return tasks.isCompleted === true;
      });
        /*SIDE NOTE: use of `` can't 
        properly show entire object
        only elements of object*/
      console.log('filterd toDos list:');
      console.log(toDoCompleted);


      /* --- Now, let's say we want
      to return the text property
      from a filtered list.
      1: First, we filter our toDos use .filter, then
      2: we use .map to return array of toDos
      where we only show text property*/
      const toDoCompletedtxt = toDos.filter(function(tasks){
        return tasks.isCompleted === true;
      }).map(function(tasks){
        return tasks.text;
      })
      console.log(
        `filterd toDos list - showing specified property only:${toDoCompletedtxt}`);
  //WHILE LOOP
  /* initialise
     while(condition){
      code here:
      incrementation;
  } */

  //CONDITIONALS
  //IF STATEMENTS
  const x = 6;
  const y = 11;

  if(x > 5 && y > 10) {
    console.log("x is more than 5 AND y is more than 10");
  }
  //'deconstructed' IF STATEMENT
  let colour = x > 10 ? 'red' : 'blue';
  console.log(colour);

  //SWITCH STATEMENT
  colour ='green';
  switch(colour){
    case 'red':
      console.log('colour is red');
      break;
    case 'blue':
      console.log('colour is blue');
      break;
    default:
      console.log('colour is NOT red or blue');
      break;        
  }

  //FUNCTIONS
  function addNums(num1, num2){
    console.log(num1 + num2);
  }

  addNums(5,4);
  /* default parameters; avoids NaN*/
  function addNumsdfp(num1 = 1, num2 = 1){
    return num1 + num2;
  }

  console.log(`default outcome: ${addNumsdfp()}`);
  console.log(`parameters outcome: ${addNumsdfp(5,5)}`);

  //ARROW FUNCTIONS
  /*swap [function] for [const] ASSIGNMENT
  insert fat arrow after parameters
  round bracketd () are only needed for 2 0r more parameters
  curly brackets {} are only needed when there's variable assignment i*/
  const addNumsAF = (num1 = 1, num2 = 1) => 
   num1 + num2;
  console.log(`arrow function w/ 2 parameters:${addNumsAF()}`);

  const addNumsAF1p = num1 => 
  num1 + 2;
 console.log(`arrow function w/ 1 parameter:${addNumsAF1p(1)}`);

 /* --- we can use arrow functions in the array functions
 we learnt about earlier --- */
  const toDoCompletedAF = 
    toDos.filter(tasks => console.log(tasks.isCompleted === true));

  const toDoCompletedtxtAF = toDos.filter(tasks =>
         tasks.isCompleted === true
      ).map(tasks => tasks.text)
      console.log(
        `filterd toDos list with arrow function
- showing specified property only:${toDoCompletedtxtAF}`);

//OBJECT ORIENTATED PROGRAMMING
//.this
/*constructer function*/
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);/*m/m-d/d-yy/yy*/
}

//PROTOTYPE
/*there are methods that we don't want/need
for every instantiation of an object. We use .prototype
foor these */

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
      
/*instatiate object*/
const person1 = new Person('Gary', 'Moon', '2-23-98');
const person2 = new Person('Trea', 'Boon', '11-25-1978');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person1);

//CLASS
 /*syntactic sugar; but functions as constructor function*/
 class Persons{
   constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);/*m/m-d/d-yy/yy*/ 
   }
  getBirthYear = function() {
    return this.dob.getFullYear();
  }
  getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1c = new Persons('Gary', 'Moon', '2-23-98');
const person2c = new Persons('Trea', 'Boon', '11-25-1978');

console.log(person1c.getBirthYear());
console.log(person2c.getFullName());
console.log(person1c);

//Document Object Model
 //Single element; will take the first element if there's more than one of it
  /*document.getElementById
    document.querySelector*/
  console.log(document.getElementById('myFrm'));
  console.log(document.querySelector('label'));
 //Multiple element
 console.log(document.querySelectorAll('label'));

/*  output for the
following DOM instructions is HTML COLLECTION NOT ARRAY, thus, 
  manually convert to ARRAY to use ARRAY FUNCTIONS
 console.log(document.getElementsByClassName());
 console.log(document.getElementsByTagName()); */

/*  const ul = document.querySelector('.items');
 ul.lastElementChild.remove();
 ul.firstElementChild.textContent = 'Hello';
 ul.lastElementChild.innerHTML = '<em> Ever since I left the city </em>' */

/* const btn = document.querySelector('.button') is what Brad used 
because he used <input class='button'.../> in his example;

I used <input type = 'submit/> hence;
const btn = document.querySelector('input.submit');
btn.style.background = 'turqoise';
-----NOT WORKING
-----Uncaught TypeError: Cannot read properties of null (reading 'style')
so I opted to use document.getElementById();
 */
 document.getElementById('subButton').style.background = 'red';

 //EVENTS
 /* added const btn variable for syntactic sugar */
 const btn = document.getElementById('subButton');
 /* addEventListener takes in event we want and 
 function you want to run when event happens 
 
 
 because submitting a form is instantaneous -
 the file/form s being sent and this happens
 in an instant thus the function we're trying to run
 lasts only as long as the file is being sent.
 - we used .preventDefault to stop
  default sending of file/form*/
 /* btn.addEventListener('click', (e) => {
   e.preventDefault();
   document.querySelector('#myFrm').style.background = '#ccc';
   seeeing eventd in console 
   console.log('click');
   console.log(e);//can see X.Y position
   console.log(e.target);
   console.log(e.target.id);
 }); */

 const nmbtn = document.getElementById('NightMode');
 nmbtn.addEventListener('click', (evn) => {
   document.querySelector('body').classList.add('nightMode');
 });

 const dmbtn = document.getElementById('DayMode');
 dmbtn.addEventListener('click', (ev) => {
   document.querySelector('body').classList.remove('nightMode');
 });

 const myForm = document.querySelector('#myFrm');
 const nameInput = document.querySelector('#nUser');
 const emailInput = document.querySelector('#eUser');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit', onSubmit);
 /* we don't have to put whole functon in addEventListener(), 
 rather create function below than call it in addEventListener() */
 function onSubmit(e) {
   e.preventDefault();

   if(nameInput.value === '' || emailInput.value === ''){
     /* alert('Please enter fields'); */

     /* msg.classList.add('error'); was added by Brad in tutorial */
     msg.innerHTML = 'Oops! Please enter all fields';
     /* timer forr errror message */
     setTimeout(() => msg.remove(), 3000);//3000 in ms = 3 secs
   } else {
     const li = document.createElement('li');
     li.appendChild(document.createTextNode
      (`${nameInput.value}: ${emailInput.value}`));
      userList.appendChild(li);

      //Clear fields
      nameInput.value = '';
      emailInput.value = '';
   }
 }
