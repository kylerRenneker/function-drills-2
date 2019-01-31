function jediName (firstName, lastName) {
    let first3OfLastName = lastName.slice(0, 3);
    let firstOfFirstName = firstName.slice(0, 2);

    return `${first3OfLastName}${firstOfFirstName}`;
}

console.log(jediName('Kyler', 'Renneker'));