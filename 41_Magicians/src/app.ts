// Array magicians
const magicians: string[] = ["Hooria", "Harry Potter", "Sameer", "usama"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
