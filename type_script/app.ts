//____________1___________//
// import {Emovements} from "./constants/enum_movements";
// import {IAnimal} from "./models/animal_interface";
// import {Enum_sayings} from "./constants/enum_sayings";
//
// class Cat implements IAnimal {
//     movement: Emovements;
//     saying: Enum_sayings;
//
//     constructor(movement: Emovements, saying: Enum_sayings) {
//         this.movement = movement;
//         this.saying = saying;
//     }
//
//     info(): string {
//         return `Cat move:${this.movement}, say: ${this.saying}`;
//
//
//     }
// }
//
// let cat1 = new Cat (Emovements.running,Enum_sayings.mya_u_u) ;
// console.log(cat1.info());
//
// class Bird implements IAnimal {
//     movement:Emovements;
//     saying:Enum_sayings;
//
//
//     constructor(movement: Emovements, saying: Enum_sayings) {
//         this.movement = movement;
//         this.saying = saying;
//     }
//     info(): string {
//         return `Bird move:${this.movement},say:${this.saying}`
//     }
// }
//
// let bird1 = new Bird (Emovements.flying, Enum_sayings.car_r_r)
// console.log(bird1.info());
//
// class Fish  implements IAnimal {
//     movement:Emovements
//
//
//     constructor(movement: Emovements) {
//         this.movement = movement;
//     }
//     info(): string{
//         return `Fish move:${this.movement}`
//     }
// }
//
// let fish1 = new Fish (Emovements.swimming);
// console.log(fish1.info());

// import {IDeputy} from "./models/deputy_interface";
// import {EGenders} from "./constants/enum_genders";
//
// let Ivan: IDeputy = {
//     age: 22,
//     name: 'Ivan',
//     gender: EGenders.FEMALE,
//     degreeOfHonesty: 80,
//     min_bribe: 100000
// }

//____________2_____________//

// abstract class Shape {
//     abstract perimeter(): number;
//
//     abstract area(): number
//
// }
//
// class Triangle extends Shape {
//     a: number;
//     b: number;
//     c: number;
//
//     constructor(a: number, b: number, c: number) {
//         super();
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
//
//
// class Rectangle extends Shape {
//     a: number;
//     b: number;
//
//     constructor(a: number, b: number) {
//         super();
//         this.a = a;
//         this.b = b;
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return (this.a + this.b) * 2;
//     }
//
// }
//
// const arr:Shape[] = [
//     new Triangle(2, 4, 3),
//     new Triangle(10, 2, 3),
//     new Rectangle(2, 4),
//     new Rectangle(2, 66),
// ];
//
// arr.forEach(value => console.log(value.area()))

// class Car {
//     protected year: number;
//     private producer: string;
//     public power: number = 200;
//
//     constructor(year: number, producer: string, power?: number) {
//         this.year = year;
//         this.producer = producer;
//         this.power = power;
//     }
//
//     protected changeYear(newYear) {
//         this.year = newYear;
//     }
//
//     getYear() {
//         return this.year
//     }
//
//     protected setYear(newYear) {
//         this.year = newYear;
//     }
//
//     private privateTest() {
//         console.log('test');
//     }
// }
//
// class SuperCar extends Car {
//     public color: string;
//
//     constructor(year: number, producer: string, power: number, color: string) {
//         super(year, producer, power);
//         this.color = color;
//     }
// }
//
// let car1 = new Car(2008, 'Vaz');
// let superCar = new SuperCar(2018, 'Mazda', 444, 'red');
//
// car1.getYear()
//
// const user = {
//     name:'Victor',
//     age:30,
//     laptop:{
//         model:'Dell',
//         memory:16,
//     },
//     car:{
//         year:2009
//     },
//     bike:'Yamaha'
// }
// console.log(user?.bike?.price?.currency)
//
// let names:string[] | number =['Anya','Anton','Dimas'];
// let names2:Array<string | number>  =['Anya','Anton','Dimas'];
//

// function userLogger (users: Array<IUser>):void {
//     users.forEach((user)=>{
//             user.cars?.forEach((car)=>{
//             console.log(car.color);
//         })
//     })
// }
//
// userLogger([Ivan])
//
// let Viktor: Partial<IUser>={
//     name:'Viktor',
//     age:25
// }
//
// function logToDB(user:Partial<IUser>){
//     console.log(user);
// }
// logToDB({name:'Dimas',age:88})
//
// const keys: Array<keyof IUser> = ["age","cars","gender","goWork","name","wife","gender"];
//
// function getValueOfKey(key:keyof IUser): void {
//     console.log(Ivan[key]);
// }
// getValueOfKey("age");
//
// abstract class ACAr {
//     wheel: number;
//     power: number;
//
//     constructor(wheel: number, power: number) {
//         this.wheel = wheel;
//         this.power = power;
//     }
//
//     ride(): void {
//         console.log(`ride with ${this.power * 2}km/h`);
//     }
// }
//
// class Car extends ACAr {
//     color: string = 'white';
//
//     constructor(wheel: number, power: number, color?: string) {
//         super(wheel, power);
//         this.color = color;
//     }
// }
//
// const bibizika = new Car(4, 170);
// bibizika.ride();
