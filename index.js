const reverseFunction = (params)=>{
     let result =   params.split('').reverse().join('')
     console.log(result);
}
reverseFunction("Ahmed")

const samename1 = "level"
// const samename2 = "Mary"

console.log(pandolimFunction(samename1));
function pandolimFunction(params) {
       let value = params.toLowerCase();
       let updatedValue =   value.split('').reverse().join('')
     return updatedValue === params
}

const  findMissingNumebr = ((params)=>{

const number  = params.length + 2
let simpleArray = []
for (let index = 1; index <=  number     ; index++) {
    if (!params.includes(index)) {
        simpleArray.push(index)
        return simpleArray 
    }
}
return - 1 
})

console.log(findMissingNumebr([1,2,4,5,7]));
const  findMissingNumebr2 = ((params)=>{

const number  = params.length + 2
let simpleArray = []
for (let index = 1; index <=  number     ; index++) {
    if (params.indexOf(index) === -1) {
        simpleArray.push(index)
        return simpleArray 
    }
}
return - 1 
})

console.log(findMissingNumebr2([1,2,4,5,7]));


// If want to find Multiple missing number 



const findMissingNumber = ((params) => {
  const number = params.length + 1;
  const MissNumbers = [];

  for (let i = 0; i < number; i++) {
    if (!params.includes(i)) {
      MissNumbers.push(i);
    }
  }

  if (MissNumbers.length === 0) {
    return -1; // No missing numbers
  } else {
    return MissNumbers;
  }
});

const result = findMissingNumber([1, 3, 4, 5]);
console.log(result); // Output: [0, 2]






// Count Characters 

// function countCharacters(str) {
//     const charCount = {};
  
//     for (const char of str) {
//       // If the character is not a space, count it. You can also include other conditions to exclude specific characters if needed.
//       if (char !== ' ') {
//         charCount[char] = (charCount[char] || 0) + 1;
//       }
//     }
  
//     return charCount;
//   }
  
//   const myString = "Hello, World!";
//   const result = countCharacters(myString);
//   console.log(result);

  

//   Remove Duplicates




// const removeDuplicate = array.filter((value , index , array)=>{
//     return array.indexOf(value) === index;
// })

// console.log(removeDuplicate);


const array = [1, 2, 2, 3, 4, 4, 5];
const removeDuplicate = array.reduce((accumulator, current) => {
  if (!accumulator.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);

console.log(removeDuplicate); // Output: [1, 2, 3, 4, 5]


// Count Characters 



function countCharacters (str){
const charCount = {}
for (const char of str) {
  if (char !=   " "   ) {
      charCount[char  ]  = (charCount[char  ] || 0 )  + 1  
  }
}
return charCount
} 
const myString = "Hello, World!";
const result = countCharacters(myString);
console.log(result);



// FizzBuzz Challenge


for (let index = 0; index <= 100; index++) {
  let f = index % 3 === 0   
  let b = index % 5 === 0
  console.log(f ? (b? "Fizzbuzz" : "Fizz"   ) : b ? "buzz" : "index");
}




function caseConvert(params) {
  return params
    .split(' ')
    .map(value => {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(caseConvert('the quick brown fox'));
// Output: "The Quick Brown Fox"


// Factorial Function 

const factorialFunction = ((n)=>{
if (n === 1 || n=== 0  ){
  return 1
}
else{
return n * factorialFunction(n-1)
}
})
console.log(factorialFunction(5));


// Flattend Array 
function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // Output: [1, 2, 3, 4, [5, 6]]





function areAnagram(value1 , value2) {
  const sortValue1  =  value1.split('').sort().join('')  
  const sortValue2  = value2.split('').sort().join('')
  return sortValue1 === sortValue2 
}
console.log(areAnagram('listen', 'silent')); // Output: true



function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));   // Output: true (4 is an even number)
console.log(isEven(7));   // Output: false (7 is not an even number)
console.log(isEven(0));   // Output: true (0 is an even number)
console.log(isEven(-2));  // Output: true (-2 is an even number)
console.log(isEven(-7));  // Output: false (-7 is not an even number)



function isPrime (number) {
if (number < 1) {
  return false
}
  if (number === 2) {
    return true
  }

  for (let index = 3; index < Math.sqrt(number); index += 2 ) {
if (number% index === 0 ) {
  return false
}
    
  }
return true

}


console.log(isPrime(7));  // Output: true (7 is a prime number)




function removeVowel (str) {
   return str.replace(/[aeiouAEIOU]/g , "")
}
console.log(removeVowel("Ahmed Raza "));




