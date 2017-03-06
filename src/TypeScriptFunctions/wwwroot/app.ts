//function addNumbers(number1, number2) {
//    return number1 + number2;
//}

//let addNumbers2 = function (number1, number2) {
//    return number1 + number2;
//}

//let answer1 = addNumbers(2, 5);
//let answer2 = addNumbers(8, 9);

//console.log('answer1 = ' + answer1);
//console.log('answer2 = ' + answer2);

//let susan = addNumbers(2, 5);
//let anthony = addNumbers(8, 9);

//console.log('susan = ' + susan);
//console.log('anthony = ' + anthony);

//function multiplyNumbers(number1: number, number2: number) {
//    return susan * anthony;
//}

//let reverse = (str: string) => str.split('').reverse().join('');
//let myString = "What is the airspeed velocity of an unladen swallow?";
//console.log(`${myString} reversed is: ${reverse(myString)}`);

// returns random number between 0 to 1
//function getRandom() {
//    return Math.random();
//}


//// returns a random number between 0 to max value
//function getRandomLessthan(max) {
//    return Math.random() * max;
//}


//// returns a number between min value to max value
//function getRandomBetween(min: number, max: number) {
//    return Math.random() * (max - min) + min;
//}

//Create a Person class with firstName and lastName property.Create a method named getFullName()
//that returns the person's full name (for example, "George Washington").
//class Person {
//    firstName: string;
//    lastName: string;

//    public getFullName() {
//        return this.firstName + ' ' + this.lastName;
//    }
//}

//let person1 = new Person;
//person1.firstName = 'George';
//person1.lastName = 'Washington';
//person1.getFullName();


//class Person {
//    firstName: string;
//    lastName: string;

//    public getFullName() {
//        return this.firstName + ' ' + this.lastName;
//    }
//}

//let person1 = new Person;
//person1.firstName = 'George';
//person1.lastName = 'Washington';
//person1.getFullName();



//Create an Employee class that has a firstName and lastName field.
//When you create a new instance of an employee then the first and last name should default to "Bill" and "Gates".

//class Employee {
//    firstName: string;
//    lastName: string;

//    constructor() {
//        this.firstName = 'Bill';
//        this.lastName = 'Gates';
//    }
//}

//let employee1 = new Employee();



//Create a Bear class that has name field with the default value 'Yogi' 
//and a favoriteFood field with the default value 'Picnic Basket'.
//class Bear {
//    name: string;
//    favoriteFood: string;

//    constructor() {
//        this.name = 'Yogi';
//        this.favoriteFood = 'Picnic Basket';
//    }
//}

//let bear = new Bear();



//Create a BadGuy class that has a firstName field with the default value of "Darth" and 
//a favoriteColor field with the default value "black".

//class BadGuy {
//    firstName: string;
//    favoriteColor: string;

//    constructor() {
//        this.firstName = 'Darth';
//        this.favoriteColor = 'black';
//    }
//}

//let badGuy = new BadGuy();



//Create a Product class with a name and a price field.
//You should not be able to create an instance of a Product without supplying both a name and price.
//Create two instances of the Product class named product1 and product2.
//The first product should represent milk that costs $2.44 and the second product should represent oranges that cost $4.55.

class Product {

    constructor(public name: string, public price: number) { }
}
let product1 = new Product('milk', 2.44);
let product2 = new Product('oranges', 4.55);



//You can't send an email without supplying a value for the from, to, and subject fields of the email message. 
//Create an Email class that has a constructor that includes from, to, and subject parameters.

class Email {

    constructor(public from: string, public to: string, public subject: string) { }
}



// Create three classes named Shape, Triangle, Square.  Triangle and Square should inherit from Shape.

//abstract class Shape {

//}


//class Triangle extends Shape {

//}


//class Square extends Shape {
 
//}


// Create three classes named Apple, Orange, and Fruit. Both Apple and Orange should inherit from Fruit.
//abstract class Fruit {

//}


//class Apple extends Fruit {

//}


//class Orange extends Fruit {

//}


//Your store sells two types of hamburgers: plain hamburgers and cheeseburgers.
//Create two classes named Hamburger and Cheeseburger.
//Both the Hamburger and Cheeseburger classes should have a public name field.
//The default value for Hamburger name should be 'Hamburger' and 
//the default value for Cheeseburger name should be 'Cheeseburger'.
//Both the Hamburger and Cheeseburger classes should have a public getPrice() method.
//A Cheeseburger should always cost 1 more dollar than a Hamburger (the cost of cheese).

 abstract class Hamburger {

     public getPrice() {
         return 2;
     }

     constructor(public name: string) {
         this.name = 'Hamburger';
     }
}


class Cheeseburger extends Hamburger {

    public getPrice() {
        return super.getPrice() + 1;
    }

    constructor(public name: string) {
        super(name)
        this.name = 'Cheeseburger';
    }
 }
