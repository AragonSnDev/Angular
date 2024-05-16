interface AudioPlayer {
    audioVolume: number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author: string; 
    year:number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 60,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// const {song,songDuration:duration,audioVolume:volumen,details:{year,author}} = audioPlayer;

// console.log(`Song: ${song}`);
// console.log(`Duration: ${duration}`);
// console.log(`Volume: ${volumen}`);
// console.log(`Author: ${author}`);
// console.log(`Year: ${year}`);

const [, ,trunks = 'Not Found']: string[] = ['Goku','Vegeta','Trunks'];

console.error('Personaje 3: ',trunks)



export {}