interface IPersona {
    readonly dni: string;
    name: string;
    lastName: string;
    fullName(): string;
} 

class Person implements IPersona {
    constructor(readonly dni: string){

    }
    private lastNameValue:string;
    public name:string;

    get lastName():string{
        return this.lastNameValue;
    }

    set lastName(value: string){
        this.lastNameValue = value;
    }

    fullName(): string {
        return this.name + ', ' + this.lastName; 
    }
}

const message = 'something';
export {Person, message, IPersona};