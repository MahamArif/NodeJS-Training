import flight = require('./flight');

const instance1 = flight.create({number: 1, origin: 'VA', destination: 'America'});
const instance2 = flight.create({number: 2, origin: 'VA', destination: 'Germany'});

console.log(instance1.getInformation());
console.log(instance2.getInformation());
console.log(flight.getCount());