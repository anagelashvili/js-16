///1///

function sumOfNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

let numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9];

let result = sumOfNumbers(numbers);
console.log(result); 

///2///
let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
  };
  function getFullUserName(obj) {
    if (obj.isloggedin) {
      return `${obj.firstname} ${obj.lastname}`;
    } else {
      return "false";
    }
  }
  console.log(getFullUserName(user));


///3///
let arrayNum = [50, 40, 37, 86];
function maxNumber(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(Math.max(...arrayNum));
console.log(maxNumber(arrayNum));


///4///
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "this number is even";
    } else {
        return "this number is odd";
    }
}
console.log(checkEvenOrOdd(5)); 
console.log(checkEvenOrOdd(10)); 


///5///
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray); 

///6///
const checkAge = (age) => {
    if (age > 18) {
        return "სრულლოვანი";
    } else {
        return "არასწორწლოვანი";
    }
};
console.log(checkAge(25)); 
console.log(checkAge(18)); 
console.log(checkAge(30));


///7///
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 5) {
        console.log('ლისტში არის მოცემული ციფრი');
        break; 
    }
}

///8///
// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i];
// }

// console.log("ციფრთა ჯამია:", sum); 

///9///
// let array4 = [1, 2, 3, 4, 5];
// let sum = 0;


// for (let i = 0; i < array4.length; i++) {
//     sum += array4[i];
// }

// let sashualo = sum / array4.length;

// console.log("საშუალო არითმეტიკულია:", sashualo); 

///10///
// let array5 = [1, 2, 3, 7, 6, 9];

// for (let i = 0; i < array5.length; i++) {
//     if (array5[i] === 7) {
//         continue;
//     }
//     console.log(array5[i]); 
// }


///11///
let array5 = [32, 14, null, '40', 50];

for (let i = 0; i < array5.length; i++) {
    
    if (typeof array5[i] === 'number' && array5[i] % 5 === 0) {
        console.log(array5[i]); 
    }
}

///12///
let array8 = [
    [2, -3, 5, 11],
    [1, -35, -11],
    [12, -36, -24]
];

for (let i = 0; i < array8.length; i++) {
    
    for (let j = 0; j < array8[i].length; j++) {
        
        if (array8[i][j] > 0) {
            console.log(array8[i][j]); 
        }
    }
}


