// The given variable statistics
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars:40,
  rareCars: 2
};

// a for loop to print out required property
for (let property in statistics) {
  // check if the property starts with letter 'r'
  if (property[0] === 'r') {
      console.log(`${property}: ${statistics[property]}`);
  }
  // if not, check if the value of the property is an odd number
  else if ((statistics[property] % 2) == 1) {
    console.log(`${property}: ${statistics[property]}`);
  }
}  
