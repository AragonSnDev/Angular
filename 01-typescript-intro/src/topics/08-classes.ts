export class Person {

    constructor(
        public name:string, 
        private address: string = 'No Address'
        ) {
    }
}

export class Hero extends Person {
    
    constructor(
        public alterEgo: string,
        public age:number,
        public realName: string,
        public person: Person
    ){
        super(realName,'New York');
    }
}

const person = new Person ('Tony Stark');

const ironMan = new Hero('Ironman',45, 'Tony',person);



console.log(ironMan);
