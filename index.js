const drivers = []

// Write lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase. 
function lowerCaseDrivers(drivers) {
   return drivers.map(function(name) {
      return name.toLowerCase(); 
   })
}

// Write nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, 
// and returns an array of JavaScript objects with firstName and lastName attributes.
function nameToAttributes(drivers) {
   return drivers.map(function(driverName) {
      // if we split the driverName by space and grab the element at index 0, we get the first name 
      // similarly, if we split the driverName by space and grab the element at index 1, we get the last name 
      const driverFirstName = driverName.split(" ")[0]
      const driverLastName = driverName.split(" ")[1]
      // return an array of object with a key of firstName and lastName 
      return { firstName: driverFirstName, lastName: driverLastName}
   })
}

// Write attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying 
// "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are 
// looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".
function attributesToPhrase(drivers) {
   return drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`; 
   })
}
