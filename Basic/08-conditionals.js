// if, else if, else

// if

let age = 18;

if (age == 37) {
    console.log('You are 37 years old.');
}

// else 

if (age == 37) {
    console.log('You are 37 years old.');
}else {
    console.log('You are not 37 years old.');
}


// else if 

if (age == 37) {
    console.log('You are 37 years old.');
}else if (age < 18){
    console.log('You are a minor.');
}else {
    console.log('You are not 37 years old and you are not a minor.');
}

// ternary operator

const message = age == 37 ? 'You are 37 years old.' : 'You are not 37 years old.';
console.log(message);

// switch

let day = 2;
let dayName

switch (day) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
        break;
}

console.log('Today is ' + dayName);