const magicians: string[] = ["Hooria", "Harry Potter", "Sameer", "usama"];

function copyArray(arr:string[]) {
    return [...arr]
}

function make_great(magiciansarray: string[]): void {
    for (let index = 0; index < magiciansarray.length; index++) {
        magiciansarray [index] = "The Great " + magiciansarray[index];
        
    }

}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const copyMagicianArray = copyArray(magicians)

make_great(copyMagicianArray);

console.log('This is my original array: ');
show_magicians(magicians)

console.log('This is my modified copy of the array: ');
show_magicians(copyMagicianArray);