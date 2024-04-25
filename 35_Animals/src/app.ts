// Set describe_city Fucntion
function describe_city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  
  // Result
  describe_city('Karachi', 'Pakistan');
  describe_city('Busan', 'South Korea');
  describe_city('Paris');