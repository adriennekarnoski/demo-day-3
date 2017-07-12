'use strict';

// Arrays

var myCats = ['BuddyCat', 'Alistair', 'Trillian'];
// "var myCats" is a variable declaration
// "= ['BuddyCat', 'Alistair', 'Trillian']" is an assignment
// "=" is called an assignment operator

// We use 'for' loops to iterate over arrays.

// for(a var holding a starting index; how many times; increment) {
//  stuff to do to each array element
//}


//for (condition) {
//  execute the code in this block
//}

// use i for variable to stand for index
//for (var i = 0; i < myCats.length; i ++) {
//  console.log(myCats[i]);
//  alert(myCats[i].toUpperCase());
//}

//log the name of each cat in the array

//i++ is an incrementer; "++" is the "increment operator"

for (var i = 0; i < myCats.length; i ++) {
  if (myCats[i] === 'Trillian') {
    console.log('Trill!!!!')
  } else {
    console.log('Not Trill!')
  }
}

// if (condition is true) {
//  do the code stuff
// } else {
//  do the other code stuff
// }

// if (condition is true) {
//  do the code stuff
// } else if (this other condition){
//  do the other code stuff
// } else {
//  do this stuff as a catch all
// }

// while (a condition is true) {
//  keep doing this stuff in the code block until the condition is false
// }

var x = 0;
while (x < 7) {
  console.log('x = ', x);
  x++;
}

var y = 0;
do {
  console.log('y = ', y);
  y++;
} while (y < 4);

//do while will always run at least once
