export interface Passanger{
    name:string;
    children?: string[];
}

const passanger1: Passanger = {
    name: 'Fernando',
}
const passanger2: Passanger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const printChildren = (passanger: Passanger) => {
    const howManyChildren = passanger.children?.length || 0;
    
    console.log(howManyChildren);
    
}

printChildren(passanger2);