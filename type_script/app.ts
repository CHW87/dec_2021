import {IUser} from "./models/user_interface";
import {EGenders} from "./constants/enum_genders";

console.log(22)
function multiplier(a:number,b?:number):void {
   console.log(a * b) ;
}
let number =  multiplier(2)
multiplier(2)

class Car {
    protected year: number;
    private producer: string;
    public power: number = 200;

    constructor(year: number, producer: string, power?: number) {
        this.year = year;
        this.producer = producer;
        this.power = power;
    }

    protected changeYear(newYear) {
        this.year = newYear;
    }

    getYear() {
        return this.year
    }

    protected setYear(newYear) {
        this.year = newYear;
    }

    private privateTest() {
        console.log('test');
    }
}

class SuperCar extends Car {
    public color: string;

    constructor(year: number, producer: string, power: number, color: string) {
        super(year, producer, power);
        this.color = color;
    }
}

let car1 = new Car(2008, 'Vaz');
let superCar = new SuperCar(2018, 'Mazda', 444, 'red');

car1.getYear()

const user = {
    name:'Victor',
    age:30,
    laptop:{
        model:'Dell',
        memory:16,
    },
    car:{
        year:2009
    },
    bike:'Yamaha'
}
console.log(user?.bike?.price?.currency)

let names:string[] | number =['Anya','Anton','Dimas'];
let names2:Array<string | number>  =['Anya','Anton','Dimas'];

let Ivan :IUser = {
    age: 22,
    name:'Ivan',
    gender:EGenders.FEMALE,
    cars:[{color:'red'}],
    goWork:()=>{
        return 200
    }
}
function userLogger (users: Array<IUser>):void {
    users.forEach((user)=>{
            user.cars?.forEach((car)=>{
            console.log(car.color);
        })
    })
}

userLogger([Ivan])

let Viktor: Partial<IUser>={
    name:'Viktor',
    age:25
}

function logToDB(user:Partial<IUser>){
    console.log(user);
}
logToDB({name:'Dimas',age:88})

const keys: Array<keyof IUser> = ["age","cars","gender","goWork","name","wife","gender"];

function getValueOfKey(key:keyof IUser): void {
    console.log(Ivan[key]);
}
getValueOfKey("age");

abstract class ACAr {
    wheel: number;
    power: number;

    constructor(wheel: number, power: number) {
        this.wheel = wheel;
        this.power = power;
    }

    ride(): void {
        console.log(`ride with ${this.power * 2}km/h`);
    }
}

class Car extends ACAr {
    color: string = 'white';

    constructor(wheel: number, power: number, color?: string) {
        super(wheel, power);
        this.color = color;
    }
}

const bibizika = new Car(4, 170);
bibizika.ride();
