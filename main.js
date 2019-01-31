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

