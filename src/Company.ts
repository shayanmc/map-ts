import faker  from "faker";
import { Mappable } from "./CustomMap";


export class Company implements Mappable{
    companyName : string;
    cathPhrase : string;
    location : {
        lat : number;
        lng : number;
    };
    color: string = 'red'

    constructor() {
        this.companyName = faker.company.companyName();
        this.cathPhrase = faker.company.catchPhrase();
        this.location = {
            lat : +faker.address.latitude(),
            lng : +faker.address.longitude(),
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name : ${this.companyName}</h1>
            <h3>cathPhrase : ${this.cathPhrase}</h3>
        </div>
        `;
    }

}