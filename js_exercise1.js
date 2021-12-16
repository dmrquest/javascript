// Be sure to add these exercises in a separate repo in your GitHub profile.


// 1. Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

// An example here is:

// N = 15

// 1 2 3 Fizz 4 5 Buzz 6 Fizz 7 8 9 Fizz 10 Buzz 11 12 Fizz 13 14 15 FizzBuzz

// ----ANSWER---

// for double ==

for(i=1; i<21; i++) {

  if((i%3 == 0) && (i%5 == 0)) {
      console.log("FizzBuzz");
  }
  else if(i%3 == 0) {
      console.log("Fizz");
  }
  else if(i%5 == 0) {
      console.log("Buzz");
  }
  else {
      console.log(i);
  }
}

// Output

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// for triple ===

for(i=1; i<51; i++) {

  if((i%3 === 0) && (i%5 === 0)) {
      console.log("FizzBuzz");
  }
  else if(i%3 === 0) {
      console.log("Fizz");
  }
  else if(i%5 === 0) {
      console.log("Buzz");
  }
  else {
      console.log(i);
  }
}

// Output


// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz

// 2. Write a function to check whether the word "script" (case-sensitive) appears in the 5th position / 4th index of a given word.

// Example:
// Javascript is "true"
// Javscript is "false"
// Javascrip is "false"
// Javascrip t is "false" (there is a space in between p and t)

// ----ANSWER---

let checkScript = function(str){
  if(str.toUpperCase().indexOf('SCRIPT') == 4) {
      str = str.toUpperCase().replace('SCRIPT','');
      return "TRUE";
  }else{
      return "FALSE";
  }
}
console.log(checkScript('JavaScript'));
console.log(checkScript('JavScript'));
console.log(checkScript('JavaScrip'));
console.log(checkScript('JavaScrip t'));

// Output

// TRUE
// FALSE
// FALSE
// FALSE


// 3. Write a JavaScript function that takes one argument "year" and determines if that year is a leap year.

// A leap year is defined as:

// If the year is divisible by 4.
// If the year is divisible by 4 but not by 100.
// If the year is divisible by 4 and also by 400.

// ----ANSWER---

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

// Output:

// true
// true
// false
// false
// false