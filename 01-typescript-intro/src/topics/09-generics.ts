export function whatsMyType<T>(argument:T) :T {
    return argument;
    
}

let amIString = whatsMyType<string>('hola mundo');
let amIBumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amIBumber.toFixed());
console.log(amIArray.join('-'));

