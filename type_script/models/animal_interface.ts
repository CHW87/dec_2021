import {Emovements} from "../constants/enum_movements";
import {Enum_sayings} from "../constants/enum_sayings";

export interface IAnimal {
    movement:Emovements,
    saying?:Enum_sayings,
    info():string
    
}
