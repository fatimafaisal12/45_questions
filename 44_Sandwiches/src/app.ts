function makeSandwich (item : string[]) {
console.log('Making sandwich with:');

item.forEach(element => console.log("-" + element ));
console.log('Enjoy your sandwich!');
}
makeSandwich(['Turkey', 'bacon']);
makeSandwich(['Ham', 'lettuce' , 'cheese']);
makeSandwich(['peanut butter' , 'jam jelly']);