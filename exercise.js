let studentScore=50
let studentAttendant='75%'
let projectSubmit=true

if (studentScore>=true) {
    if (studentAttendant>=true) {
        if (projectSubmit=true) {
            console.log('you have finally graduate')
        }else{
            console.log('you wont be able to graduate')
        }
   }else{
        console.log('your attendant are not complete')
    }
}else{
    console.log('you did not pass your exams')
}


let applicantSalary=3000
let unPaidLoans=false
let creditElse=600

if (applicantSalary>=true) {
    if (unPaidLoans=true) {
        if (creditElse<=700) {
            console.log('you are eligible for a loan')
        } else {
            console.log('you are not eligible for a loan')
        }
    } else {
       console.log('to many outstanding loan') 
    }
    
} else {
    console.log('poor salary')
}

let openedRes=true
let availableDish="rice,beans,eba"
let customerBal=5000
let costperFood=3000
let customerDish='beans'


if (openedRes) {
   if (availableDish.includes(customerDish)) {
    if (costperFood<=customerBal) {
        console.log('You can now place your order')
    } else {
        console.log('sorry you dont have enough money to pay')
    }
    
   } else {
      console.log('sorry your desired dish is not available')
   }
} else {
    console.log('resturant is yet to open')
}

// Assignment
let clientAge=22
let clientExperience=4
let basicExperience=2
let minimumDegree="Bsc,Hnd,Masters,Phd"
let clientsDegree='Bsc'

if (clientAge>=21) {
    if (basicExperience<=clientExperience) {
        if (minimumDegree.includes(clientsDegree)) {
            console.log('Congratulation,your application is successfull')
        } else {
            console.log('Sorry,you did not have the required degreee')
        }
        
    } else {
        console.log('Sorry,you have lesser years of expereince')
    }
    
} else {
    console.log('Your age is not qualified to apply')
}

let userPurchase=120
let minMembership='prenium-member,basic-member,super-memeber'
let userMember="prenium-member"
let companySpecialsaleDay="Sunday"
let clientPurchaseDay="Sunday"

if (userPurchase>=100) {
    if (minMembership.includes(userMember)) {
        if (companySpecialsaleDay === clientPurchaseDay) {
            console.log('Congratulation,you have won a 50% discount on all purchase.')
        } else {
          console.log('client only have access to 50% discount if purchase was made on the special sales days,a prenium member and purchase og good worth more than $100')  
        }
        
    } else {
        console.log('sorry ,you are not part of our prenium member.')
    }
    
} else {
    console.log('you are not eligible for the 50% discount as purchase amount is not up to $100')
}

let userSessiomexist=true
let usersectionvalidty=true
let adminPriviledgeRequirement="3-STARS"
let userNumbersOfStars="3-STARS"
let userDeviceEncrption=true
let userSecurityCertificateValidity=true


if (userSessiomexist && usersectionvalidty) {
    if (adminPriviledgeRequirement===userNumbersOfStars) {
        if (userDeviceEncrption===userSecurityCertificateValidity) {
            console.log("USER IS PRESENTLY LOGGED IN,HAS ADMIN PRIVILEGE AND ACCESSING FROM A SECURE NETWORK.")
        } else {
            console.log('USER IS NOT ACCESSING FROM A SECURE NETWORK!')
        }
        
    } else {
        console.log('USER IS DOES NOT HAVE ADMIN PRIVILEGE')
    }
    
} else {
    console.log('USER IS NOT CURRENTLY LOGGED IN!')
}


let appAccess='valid'
let iFittnessSubscription='valid'
let memberRegularity='not-valid'
let userMonthlyPaymentInfo='January,March,April,June,August'
let presentMonth="August"
let userLastBooking="Monday"
let presentDay='Monday'


if (appAccess || iFittnessSubscription || memberRegularity=="valid") {
    if (userMonthlyPaymentInfo.includes(presentMonth)) {
        if (userLastBooking==presentDay) {
            console.log('You are scheduled for 9;00am ,we hope to see you around.')
        } else {
            console.log('Sorry,you have not booked an appointment')
        }
        
    } else {
       console.log('sorry you have not made your monthly payment for this mont') 
    }
    
} else {
    console.log('your membership subscription is not active')
}
