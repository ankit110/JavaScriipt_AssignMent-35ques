// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// array of objects named users 👇👇

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];



// Here making formatDate function to format the date the way we want.

const date = new Date();

const formateDate = (Date) => {
    if(Date > 9) { 
        return Date;
    } else {
        return `0${Date}`;
    }
}

// Here the function format time in 12hr format.

const formatHour = (Hour) => {
    if(Hour > 12) {
        return `${Hour - 12}`;
    } else if(Hour < 10){
        return `0${Hour}`;
    } else {
        return `${Hour}`;
    }
}

// this is for am and pm in date.

const frmthr = (Hour) => {
    if(Hour > 12) {
        return `PM`;
    } else if(Hour < 10){
        return `AM`;
    } else {
        return `AM`;
    }
}

// function for users signUp record.👇👇

let signUp = (email) => {
    // Checking if user is exist in our record or not.

    for (const element of users) {
        if(element.email == email) {
            console.log("User already have an account. Go for signup.");
            return;
        } 
    }

    // Get the userName from email.

    let userNm = email.substring(0, email. indexOf('@'));
    
    userNm = userNm.charAt(0).toUpperCase() + userNm.slice(1);

    // this is for format date and time.

    const format = {
        YYYY: date.getFullYear(),
        MM: formateDate(date.getMonth() + 1),
        DD: formateDate(date.getDate()),
        HH: formateDate(formatHour(date.getHours())),
        mm: formateDate(date.getMinutes()),
        ampm: frmthr(date.getHours())
    };

    // Format the date we want and store in a variable.

    const dateString =`${format.DD}/${format.MM}/${format.YYYY} ${format.HH}:${format.mm} ${format.ampm}`;
    
    // creating new user in the record.

    let newUser = {
        _id: (Math.random().toString(36).slice(2, 8)),
        username: userNm,
        email: email,
        password: (Math.random().toString(9).slice(2, 8)),
        createdAt: dateString,
        isLoggedIn: false
    }

    users.push(newUser);
}

// SignIn function

const signIn = (email) => {
    // Checking if user is exist in our record or not.

    for (const element of users) {
        if(element.email == email) {
            console.log("Welcome, successfully signed In.");
            return;
        } 
    }

    console.log("You are not registered user! Please, SignUp first.")
}

// Enter your emailId here 👇👇

const prompt=require("prompt-sync")({sigint:true}); 
let email = prompt("Enter EmailId: ");

signIn(email);  // calling a signIn function

signUp(email);
console.log(users); // calling a signIn function.



