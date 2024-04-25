var guest_list = ['urooba', 'basil bhai', 'dua', 'ayesha'];
for (var index = 0; index < guest_list.length; index++) {
    console.log('Dear ' + guest_list[index] + ',\n We invited you on dinner tommorow\n Thankyou\n');
}
var not_present = 'dua';
var new_guest = 'huzaifa';
guest_list[2] = new_guest;
for (var index = 0; index < guest_list.length; index++) {
    console.log('Dear ' + guest_list[index] + ',\n We invited you on dinner tommorow\n Thankyou\n');
}
guest_list.unshift('jungkook', 'taehung', 'dodo hee');
for (var index = 0; index < guest_list.length; index++) {
    console.log('Dear ' + guest_list[index] + ',\n We invited you on dinner tommorow.we got a bigger table so we decided to invite 3 more guests.\n Thankyou\n');
}
console.log('unfortunately we cannot arrange big table only two people sitting available');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Mr/Ms ".concat(remove_guest, " , you are not invited for dinner"));
}
for (var index = 0; index < guest_list.length; index++) {
    console.log('Dear ' + guest_list[index] + ', \n you are still invited'), '\nThank you \n';
}
guest_list.splice(0, 2);
console.log(guest_list);
