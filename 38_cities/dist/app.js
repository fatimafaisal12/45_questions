"use strict";
// Set describe_city Fucntion
function describe_city(cityName, country = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
}
// Result
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
