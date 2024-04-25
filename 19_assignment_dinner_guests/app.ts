let guest_list: string []= ['urooba','basil bhai','dua','ayesha'];

// for(let i=0; i<guest_list.length; i++){
    //    console.log(`Dear Mr. ${guest_list[i]}, \nIts my pleaseure to invite you for the dinner.\nRegards,\n${my_name}\n\n`);
//}

let not_present : string = 'dua';
let new_guest: string = 'huzaifa';
guest_list[2]= new_guest
//for(let index = 0; index < guest_list.length; index++) {
   // console.log('Dear ' + guest_list[index] + ',\n We invited you on dinner tommorow\n Thankyou\n');

//}

// invite 3 more guests.
guest_list.unshift('jungkook', 'taehung','dodo hee');
 // here i print 6 guest's array.
//for(let index = 0; index < guest_list.length; index++) {
  // console.log('Dear ' + guest_list[index] + ',\n We invited you on dinner tommorow.we got a bigger table so we decided to invite 3 more guests.\n Thankyou\n');

 //}
 
// sorry message to guest for not inviting.
//console.log('unfortunately we cannot arrange big table only two people sitting available');
// Here i remove guests.
while (guest_list.length>2) {
    let remove_guest =  guest_list.pop();
    //console.log(`Sorry Mr/Ms ${remove_guest} , you are not invited for dinner`)

}
 // Remaining 2 invited guest.
//for (let index = 0; index < guest_list.length; index++) {
   // console.log ('Dear ' + guest_list[index] + ', \n you are still invited') ,'\nThank you \n';
    
//}
// I remove all guests from array.
guest_list.splice(0,2);
//console.log(guest_list);

//exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guests are: ${guest_list.length}`);
