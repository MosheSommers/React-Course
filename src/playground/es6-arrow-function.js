const square = function(x){
    return x * x;
}

const squareArrow = (x) =>  square(x);

//console.log(squareArrow(8) );

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Moshe Sommers'));

const getLastName = (fullName) => fullName.split(' ')[fullName.split(' ').length - 1];

console.log(getLastName('MOSHE SOMMERS'));