import { Person } from './person';

export class Friend extends Person {
    constructor(){
        super('hi');
    }
    isBestFriend: boolean;

    call(){
        console.log('Thanks for calling me');
    }

    hug(){
        console.log('Thanks for hugging me');
    }
}