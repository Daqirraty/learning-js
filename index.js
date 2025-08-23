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
// let hasLicense = false

// console.log(age >= 18 && hasLicense) 
// console.log(age >= 18 || hasLicense)
// console.log(!hasLicense)

// let x= 5 
// let y = "5"
// console.log(x == y)
// console.log(x === y)
// console.log(x != y)
// console.log(x !== y)
// console.log(x > y)
// console.log(x < y)
// console.log(x >= y)
// console.log(x <= y)

                                // if statement
let age1 = 18
let voteAccess = true

if(age1 >= 18 && voteAccess === true ){
    console.log("You are eligible to vote")
}else{
    console.log("You are not eligible to vote")
}


if(age1 <= 18 || voteAccess === true ){
    console.log("You are eligible to vote")
}else{
    console.log("You are not eligible to vote")
}