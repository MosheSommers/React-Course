//console.log('HGHJHYGTF')

const muliplier = {
    numbers: [12,3,5,7,9],
    multiplyBy :17,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(muliplier.multiply());