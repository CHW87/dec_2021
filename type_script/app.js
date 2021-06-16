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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    return Rectangle;
}(Shape));
var arr = [
    new Triangle(2, 4, 3),
    new Triangle(10, 2, 3),
    new Rectangle(2, 4),
    new Rectangle(2, 66),
];
arr.forEach(function (value) { return console.log(value.area()); });
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
