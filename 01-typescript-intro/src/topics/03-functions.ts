// function addNumber(a : number, b : number):number {
//     return a + b;
// }

// const result:number = addNumber(2,5);

// console.log(result);

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}


interface Character {
    name:string;
    hp:number;
    showHp:() => void;
}

const healCharacter = (character:Character,amount:number) =>{
    character.hp += amount;
}


const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vide ${this.hp}`);
        
    }
}

strider.showHp();
healCharacter(strider,50);
strider.showHp();

export {};