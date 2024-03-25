// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }

  
  function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }

  const drivers = ["John", "Jane", "Alice", "Bob", "David"];
const driverObjects = [
  { name: "John", hometown: "New York" },
  { name: "Jane", hometown: "Los Angeles" },
  { name: "Alice", hometown: "Chicago" },
  { name: "Bob", hometown: "Houston" },
  { name: "David", hometown: "Miami" }
];


console.log(findMatching(drivers, "Jane")); 
console.log(findMatching(drivers, "joHN")); 


console.log(fuzzyMatch(drivers, "j"));
console.log(fuzzyMatch(drivers, "a")); 


console.log(matchName(driverObjects, "Jane")); 
console.log(matchName(driverObjects, "john")); 
