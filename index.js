//  OPERATORS AND LOGICAL OPERATORS

// && AND
// || OR
// ! NOT

// > Greater than
// < Less than
// != Not equal
// !== Strictly not equal to
// <= Less than or equal to
// >= Greater than or equal to
// == Equal to
// === Strictly equal to

// let age = 18
// let hasLicense = true

// console.log(age >= 18 && hasLicense) //true
// console.log(age >= 18 && !hasLicense) //false
// console.log(age < 18 && hasLicense) //false
// console.log(age >= 18 || hasLicense) //true
// console.log(!hasLicense)

// let x= 5
// let y = "5"
// console.log(x == y) // true
// console.log(x === y) // false
// console.log(x != y) // true
// console.log(x !== y) // true
// console.log(x > y) // false
// console.log(x < y) // false
// console.log(x >= y) // true
// console.log(x <= y) // true

// if statement
let age1 = 18;
let voteAccess = true;

// if(! (condition)){
//     // code to be executed if condition is true
// }

if (age1 >= 18 && voteAccess === true) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

if (age1 <= 18 || voteAccess === true) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// nested if statement
if (condition) {
  if (condition) {
  }
} else {
}

// check if balance is greater than or equal to withdrawal amount
// check if account is active
// check if bank card is valid
let balance = 5000;
let withdrawalAmount = 9000;
let isAccountActive = true;
let isBankCardValid = true;

if (balance >= withdrawalAmount) {
  if (isAccountActive) {
    if (isBankCardValid) {
      let updatedAccountBalance = balance - withdrawalAmount;
      let balance = updatedAccountBalance;

      console.log("Transaction successful");
    } else {
      console.log("Your bank card is not valid");
    }
  } else {
    console.log("Your account is not active");
  }
} else {
  console.log("Insufficient balance");
}

if (balance >= withdrawalAmount && isAccountActive && isBankCardValid) {
  let updatedAccountBalance = balance - withdrawalAmount;
  let balance = updatedAccountBalance;

  console.log("Insufficient balance");
}

let score = 85;
let subject = "Math";

if (score >= 75) {
  if (subject === "Math") {
    console.log("You passed Math");
  } else if (subject === "English") {
    console.log("You passed English");
  } else {
    console.log("You passed the subject");
  }
}

let name = "John";
let hasStolen = true;
let hasScar = true;
let isArmed = true;
let isGenerous = true;

if (name === "John") {
  console.log("You are John");
} else if (hasStolen) {
  console.log("You are a thief");
} else if (hasScar) {
  console.log("You are a gangster");
} else if (isArmed) {
  console.log("You are a dangerous person");
} else if (isGenerous) {
  console.log("You are a good person");
} else {
  console.log("You are a normal person");
}


// ELSE IF IN TENARY OPERATOR
let access = age1 >= 18 ? voteAccess === true ? "You have  access" : "You don't have access" : "You are not old enough";

// TENARY OPERATOR with esle if
let istravelling = (isGenerous) ? "You are travelling" : (hasStolen) ? "You are not travelling"  : (hasScar) ? "You have scar" : (isArmed) ? " You are armed" : "You are not armed";



let movieAge = 18;
let money = 3000;
let ticketPrice = 5000;
let seatAvailable = false;

if(movieAge < 20) {
    if(money >= ticketPrice) {
        if(seatAvailable) {
            console.log("You can watch the movie");
        } else {
            console.log("No seat available");
        }
    } else {
        console.log("You don't have enough money");
    }
} else {
    console.log("You are too young to watch the movie");
}



// EXERCISE
// Write a program that:
// Checks if the student’s score is 50 or above (pass).
// If passed, check if the student attended 75% or more classes.
// If yes, check if they submitted the final project.

// SOLUTION
let scores = 60;
let attendance = 75;
let projectSubmitted = true;

if (scores >= 50) {
    if (attendance >= 75) {
        if (projectSubmitted === true) {
            console.log("Congratulations!");
        } else {
            console.log("You did not submit the final project");
        }
    } else {
        console.log("You did not attend enough classes");
    }
} else {
   console.log("You did not pass the course"); 
}


// Write a program that:
// Checks if the applicant’s salary is $3000 or more.
// If yes, check if they have no unpaid loans.
// If yes, check if their credit score is at least 700.

// Write a program that:
// Checks if the restaurant is open.
// If yes, check if the customer’s desired dish is available.
// If yes, check if the customer has enough money to pay.


// SWICH CASE STATEMENT
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red or green.");
  case "banana":
    console.log("Bananas are yellow.");
  default:
    console.log("Fruits are healthy.");
}


                                    // ASSIGNMENT

// INSTRUCTIONS:
// 1.PULL THE LATEST CODE FROM THE REPOSITORY
// 2.MERGE THE MAIN BRANCH INTO YOUR BRANCH, RESOLVE ANY CONFLICTS
// 3.COMPLETE THE ASSIGNMENT BELOW
// 4.PUSH THE CODE TO YOUR BRANCH   

// 1. Write a program that:
// Checks if the applicant’s age is 21 or older.
// If yes, check if they have at least 2 years of experience.
// If yes, check if they have a university degree.


// 2.Write a program that:
// Checks if the purchase amount is at least $100.
// If yes, check if the user is a premium member.
// If yes, check if today is a special sale day.

// 3. Write a program that:
// Checks if the user is logged in.
// If yes, check if they have admin privileges.
// If yes, check if they are accessing from a secure network.

// 4. Write a program that:
// Checks if the user’s membership is active.
// If yes, check if they have paid this month’s fee.
// If yes, check if they have booked a slot for today.

