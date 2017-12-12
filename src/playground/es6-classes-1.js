class Person  {
    constructor(name= 'you', adress, age = 0) {
       this.name = name;
       this.adress = adress;
       this.age = age;
    }
    getGreeting(){
        return `Hi ${this.name}!!!!`;
    }
    getdescription(){
        return `${this.name} is ${this.age} year${this.age > 1 || this.age == 0 ? 's': ''} old.`
    }

}

class Traveler extends Person {   
    constructor(name, adress, age, homeLoacation){
        super(name, adress, age);
       this.homeLoacation = homeLoacation;
    }
    hasHomeLocation(){
        return !!this.homeLoacation;
    }
    getdescription(){
        let description = super.getdescription();
        if(this.homeLoacation){
             description += ` I am visiting from ${this.homeLoacation}.`;
        }
        return description;
    }
}

const me = new Person('Moshe', '2462');
const other = new Traveler('Some other guy', 'Whereever', 6, 'Cleveland');

console.log(other.getdescription());
console.log(me.getdescription());