//First two problems done by Kyler Renneker
function jediName (firstName, lastName) {
    let first3OfLastName = lastName.slice(0, 3);
    let firstOfFirstName = firstName.slice(0, 2);

    return `${first3OfLastName}${firstOfFirstName}`;
}

//test code
console.log(jediName('Kyler', 'Renneker'));
//end of test code



function beyond (num) {

    let response = '';

    switch (true){
        case (num === +Infinity || num === -Infinity):
            response = 'And beyond';
            break;
        
        case (num > 0 && Number.isFinite(num)):
            response = 'To infinity';
            break;

        case (num < 0 && Number.isFinite(num)):
            response = 'To negative infinity';
            break;
        case (num === 0):
            response = 'Staying home';    
    }

    return response;
}

console.log(beyond(55));
console.log(beyond(Infinity));
console.log(beyond(-Infinity));
console.log(beyond(0));
console.log(beyond(-23));

//Below done by Mengqi Wang

function decode(string) {
    let arr = string.split(" ");
    //console.log(arr)
    let newArr = [];
    //console.log(newArr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 'a') {
            newArr.push(arr[i][1]);
        } else if (arr[i][0] == 'b') {
            //console.log('in b block')
            newArr.push(arr[i][2]);
           //console.log(newArr)
        } else if (arr[i][0] == 'c') {
            //console.log('in c block');
            newArr.push(arr[i][3]);
            //console.log(newArr)
        } else if (arr[i][0] == 'd') {
            newArr.push(arr[i][4]);
        } else {newArr.push(" ");}
    }
    return newArr;
}

let testString = "block argon meter bells brown croon droop"

// Below is 'How many days in a month'

function daysInMonth(month, leapYear) {
    switch(leapYear) {
        case true:
        switch(month) {
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
                console.log(`${month} has 31 days.`)
                break;
            case "February":
                console.log(`${month} has 29 days.`)
                break;
            case "April":
            case "June":
            case "September":
            case "November":
                console.log(`${month} has 30 days.`)
                break;
            default:
                throw 'Must provide a valid month.';
        }
    }
    switch(leapYear) {
        case false:
        switch(month) {
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
                console.log(`${month} has 31 days.`)
                break;
            case "February":
                console.log(`${month} has 28 days.`)
                break;
            case "April":
            case "June":
            case "September":
            case "November":
                console.log(`${month} has 30 days.`)
                break;
            default:
                throw 'Must provide a valid month.';
        }
    }
}

//Test codes
daysInMonth('February', true);
daysInMonth('February', false);
daysInMonth('March', false);
daysInMonth('November', true);
daysInMonth(3, true);
//End of test codes

function rockPaperScissors(choice) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    //Error handling
    if (choice !== 1 && choice !== 2 && choice !== 3) {
        throw "Your input is invalid";
    } else {
        //Log computer choice
        switch (randomNo) {
            case 1:
                console.log('Computer chose rock.')
                break;
            case 2:
                console.log('Computer chose paper.')
                break;
            case 3: 
                console.log('Computer chose scissors.')
                break;
        }
        //Log user choice
        switch(choice) {
            case 1:
                console.log('You chose rock.')
                break;
            case 2:
                console.log('You chose paper.')
                break;
            case 3: 
                console.log('You chose scissors.')
                break;
        }

        //Lot result
        switch(choice) {
            case randomNo:
                console.log('You are tied.')
                break;
            case randomNo - 1:
            case randomNo + 2:
                console.log('You lost!')
                break;
            case randomNo + 1:
            case randomNo - 2:
                console.log('You won!')
            break;
        }
    }
}

