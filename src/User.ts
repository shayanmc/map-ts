import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name : string ;
    location : {
        lat : number ; 
        lng : number ;
    };
    color:string =  'red';
    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat : +faker.address.latitude(),
            lng : +faker.address.longitude()
        };
    }
    markerContent(): string {
        return `user Name : ${this.name}`
    }
}