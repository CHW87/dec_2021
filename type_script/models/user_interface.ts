import {EGenders} from "../constants/enum_genders";
import {ICar} from "./car_interface";

export interface IUser {
    age:number,
    name:string,
    gender:EGenders,
    wife?:boolean,
    goWork?:Function,
    cars?:Array<ICar>
}
