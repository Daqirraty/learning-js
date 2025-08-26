// let studentScore = 50;
// let classAttended = "75%"
// let finalProject = true;
//  if (studentScore>=50){
//     if (classAttended>="75%"){
//          if(finalProject){
//             console.log("you have graduated")
//          }else{
//             console.log("you cannot graduate")
//          }
//     }
       
//  }

//  if (condition) {
//     if (condition) {
//         if (condition) {
            
//         } else {
            
//         }
        
//     } else {
        
//     }
    
//  } else {
    
//  }
   
// let salary = 3000;
// let noUnpaidLoan = true
// let creditScore = 700
// if (salary>=3000) {
//     if (noUnpaidLoan) {
//         if (creditScore>=700) {
//             console.log("you can apply for loan")
//         } else {
//             console.log("your creadit score is too low")
//         }
//     } else {
//         console.log("too many outstanding loan")
//     }
// } else {
//     console.log("your salary is not sufficient")
// }


// let restaurantOpen = true
// let desiredDish = true
// let customerMoney = true

// if (restaurantOpen === true) {
//     if (desiredDish) {
//         if (customerMoney) {
//             console.log("Thank you for placing order")
//         } else {
//             console.log("insuffient balance")
//         }
//     } else {
//         console.log("the food is finished")
//     }
// } else {
//     console.log("we are not available")
// }

// let restaurantOpen = true;
// let customerDesiredDish = true;
// let customerBalance = 1000;
// let dishPrice = 2000;


// if (restaurantOpen === true) {
//     if (customerDesiredDish) {
//         if (customerBalance>=dishPrice) {
//             console.log("thank you for placing order")
//         } else {
//             console.log("insufficient balance")
            
//         }
        
//     } else {
//         console.log("the food is finish")
        
//     }
    
// } else {
//     console.log("we are not available")
    
// }

let age = 19
let workExperience =  5
let universityDegree = true
if(age>=21){
    if (workExperience>=2) {
        if (universityDegree) {
            console.log("Application received,")
        } else {
            console.log("Applicant must have a university degree")
        }
    } else {console.log("Applicant must have at least 2 years of experience.")
        
    }

}else{console.log("you are not eligible to apply, Applicant must be 21 or older.")}

    // 2.Write a program that:
// Checks if the purchase amount is at least $100.
// If yes, check if the user is a premium member.
// If yes, check if today is a special sale day.

let totalPurchase = 150
let isPremiumMember = true
let isSpecialSale = true
if (totalPurchase>=100) {
    if (isPremiumMember === true) {
        if (isSpecialSale) {
            console.log ("Today is a special sale day.You get the maximum discount!")
        } else {
            console.log("No special sale for this month.")
        }
    } else {
        console.log("you must be on premium to enjoy the sale!")
    }
} else {console.log("purchase must be at least $100,to enjoy a discount!")
    
}

// 3. Write a program that:
// Checks if the user is logged in.
// If yes, check if they have admin privileges.
// If yes, check if they are accessing from a secure network.

let userLoggedIn = true
let adminPrivilege = true
let secureNetwork = false
if (userLoggedIn === true) {
    if (adminPrivilege) {
        if (secureNetwork) {
            console.log("Access granted. Secure admin access confirmed")
        } else {
            console.log("Access denied. Admin must log in from a secure network")
        }
    } else {
        console.log("Admin access only")
    }
} else {
    console.log("Please log in first")
}

// 4. Write a program that:
// Checks if the user’s membership is active.
// If yes, check if they have paid this month’s fee.
// If yes, check if they have booked a slot for today.

let activeMembership = true
let monthFee = true
let slotBooked = true
if (activeMembership) {
    if (monthFee) {
        if (slotBooked) {
            console.log("Access granted. Membership active, fee paid, and slot booked.")
        } else {
            console.log("No slot booked for today")
        }
    } else {
        console.log("fee not paid")
    }
} else {
    console.log("Membership inactive. Please renew to continue.")
}