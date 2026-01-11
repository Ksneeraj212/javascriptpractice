'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${ i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
//const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(function(name){
//   return name[0];
// }).join('');
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc +mov,0);
  labelBalance.textContent = `${acc.balance}€`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary =  function(acc){
  const incomes = acc.movements.filter(mov => mov > 0)
  .reduce((acc,mov)=> acc + mov,0);
  labelSumIn.textContent= `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0)
      .reduce((acc,mov)=> acc + mov,0);
      labelSumOut.textContent=`${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => (deposit *acc.interestRate)/100)
    .filter((int,i,arr) => {
      console.log(arr);
      return int >=1;
    })
    .reduce((acc,int)=> acc + int,0);    
    labelSumInterest.textContent= `${interest}€`;
};
//calcDisplaySummary(account1.movements);
const createUserName = function(accs){
  accs.forEach(function(acc){
   acc.username = acc.owner 
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
  })
};
createUserName(accounts);
console.log(accounts);
const updateUI = function(acc){
   //Display Movements
   displayMovements(acc.movements);
   //Display balance
   calcDisplayBalance(acc);
   //Display Summary
   calcDisplaySummary(acc);
}
let currentAccount;
btnLogin.addEventListener('click',function(e){
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;
      //Clear the input feilds
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
      updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recevierAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value ='';
  if(amount>0 && recevierAcc && currentAccount.balance >= amount && recevierAcc?.username !== currentAccount.username){
      currentAccount.movements.push(-amount);
      recevierAcc.movements.push(amount);
      updateUI(currentAccount);
  }
});
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value)=== currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    //Delete Account
    accounts.splice(index,1);
    //Hide UI
    containerApp.style.opacity =0;
  }
  inputCloseUsername.value=inputClosePin='';
});

btnLoan.addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount* 0.1)){
      currentAccount.movements.push(amount);
      updateUI(currentAccount);
    }
    inputLoanAmount.value='';
  });
let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allmovements = accountMovements.flat();
console.log(allmovements);
const overAllBalance = allmovements.reduce((acc,mov)=> acc+ mov ,0);
console.log(overAllBalance);

const overAllBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc,mov)=> acc+ mov ,0);
console.log(overAllBalance2);
//Maximum Value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max =  movements.reduce((acc, mov) => {
  if(acc >  mov)
  return acc;
  else
  return mov;
},movements[0]);
console.log(max);

//THE FIND method
const firstWithDrawal =  movements.find(mov => mov<0);//returns the first matching condition
console.log(firstWithDrawal); 
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
//INCLUDES-- Equality operator
console.log(movements.includes(-130));
//SOME -- Consditional 
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
//EVERY - returns true if every condtion is true
console.log(account4.movements.every(mov => mov > 0));
//FLAT Method
const arr =[[1,2,3],[4,5],7,8];
console.log(arr.flat());//[1, 2, 3, 4, 5, 7, 8]
const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat());//[Array(2), 3, 4, Array(2), 7, 8]

//Sorting
//Sorting incase of strings
const owners = ['Neeraj', 'Koustubh','Prateek','Alka'];
console.log(owners.sort());//'Alka', 'Koustubh', 'Neeraj', 'Prateek'
console.log(owners);//'Alka', 'Koustubh', 'Neeraj', 'Prateek'-- sort updates the orignal array

//Sorting incase of numbers
//Ascending
// movements.sort((a,b)=>{
//   if(a>b) return 1;
//   if(a<b) return -1;
// });
movements.sort((a,b) => a-b);
console.log(movements);//-650, -400, -130, 70, 200, 450, 1300, 3000]
//Desending
// movements.sort((a,b)=>{
//   if(a>b) return -1;
//   if(a<b) return 1;
// });
movements.sort((a,b) => b-a);
console.log(movements);//3000, 1300, 450, 200, 70, -130, -400, -650]

//THE FILL method for array
const x= new Array(7);
console.log(x);//Empty array of size 7 is created [empty × 7]
//x.fill(1);
console.log(x);//[1, 1, 1, 1, 1, 1, 1]
x.fill(1,3,5);
console.log(x);//[empty × 3, 1, 1, empty × 2]
const arrnew = [1,2,3,4,5,6,7];
arrnew.fill(23,2,5);
console.log(arrnew);//[1, 2, 23, 23, 23, 6, 7]

//ARRAY.From 
const y= Array.from({length:7},()=> 1);
console.log(y);//1, 1, 1, 1, 1, 1, 1
const z=  Array.from({length:7},(cur,i)=>i +1);
console.log(z);//[1,2,3,4,5,6,7]

labelBalance.addEventListener('click',function(){
  const movementUI = Array.from(document.querySelectorAll('.movements_value'),el =>Number(el.textContent.replace('€','')));
  console.log(movementUI);
} )
// const eurToUsd =1.1;
// //PIPELINE
// const totalDepositsUSD =  movements  
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc,mov) => acc + mov,0);
// console.log(totalDepositsUSD);
//console.log(username);

// const eurToUsd =1.1;
// const movementsUSD =  movements.map(function(mov){
//     return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);
// const movementsDesc =  movements.map((mov, i) => 
//   `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );
// console.log(movementsDesc);

// const deposits = movements.filter(function(mov){
//   return mov >0;
// });
// console.log(movements);
// console.log(deposits);
const balance = movements.reduce(function(acc,cur,i,arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
},0);
console.log(balance);
// MAP returns a new array containing the results of applying an operation on orignal array elements.
// FILTER returns a new array containing the array elements that passed a specified test condition.
// reduce boils('reduces') all array elements down to 1 single value(e.g adding all the elements together).
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
/////////////////////////////////////////////////

//SLICE- doesnot mutate the orignal array
let arr = ['a','b','c','d','e'];
console.log(arr.slice(2));//o/p c,d,e
console.log(arr.slice(2,4));//o/p c,d
console.log(arr.slice(-2));//o/p d,e
console.log(arr.slice(-1));//o/p e
console.log(arr.slice(1,-2)); //b,c
console.log(arr.slice());//a','b','c','d','e'
console.log([...arr]);

// SPLICE - mutate the orignal array
// console.log(arr.splice(2));// c,d,e
// console.log(arr);//a,b
arr.splice(-1);
console.log(arr);//'a','b','c','d'
arr.splice(1,2);
console.log(arr);//a,d

//REVERSE- mutate the orignal array
arr = ['a','b','c','d','e'];
const arr2 =['j','i','h','g','f'];
console.log(arr2.reverse());//'f', 'g', 'h', 'i', 'j']
console.log(arr2);//'f', 'g', 'h', 'i', 'j'];

//CONCAT
const letters =  arr.concat(arr2);
console.log(letters);//0: "a"1: "b"2: "c"3: "d"4: "e"5: "f"6: "g"7: "h"8: "i"9: "j"
console.log([...arr,...arr2]);//0: "a"1: "b"2: "c"3: "d"4: "e"5: "f"6: "g"7: "h"8: "i"9: "j"

//JOIN
console.log(letters.join(' - ' ));//a - b - c - d - e - f - g - h - i - j

//AT Method
console.log(arr[0]);//a
console.log(arr.at(0));//a

//getting last array element
console.log(arr[arr.length -1]);//e
console.log(arr.slice(-1)[0]);//e
console.log(arr.at(-2));//d
console.log('Neeraj'.at(0));//N
console.log('Neeraj'.at(-1));//J


for(const movement of movements){
  if(movement > 0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
for(const [i,movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  }else{
    console.log(` Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}
movements.forEach(function(movement , i, arr){
  if(movement > 0){
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  }else{
    console.log(` Movement ${i + 1}:you withdrew ${Math.abs(movement)}`);
  }
});
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
 console.log(`${key}:${value}`);
});

const currenciesUnique =  new Set(['USD','EUR','GBP','EUR','EUR']);
console.log(currenciesUnique);
*/