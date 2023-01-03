const fs = require('fs');

const people = [];
const genders = ['M', 'F'];
const maleNames = [
  'Morris',
  'Sandy',
  'Troy',
  'Farley',
  'Mitchell',
  'Vincent',
  'Merritt',
  'Ayden',
  'Bennett',
  'Deryck',
];
const femaleNames = [
  'Esmeralda',
  'Alys',
  'Sharmaine',
  'Delta',
  'Aletha',
  'Alease',
  'Braelyn',
  'Gillian',
  'Stephania',
  'Etta',
];
const lastNames = [
  'Nicky',
  'Jayme',
  'Teddy',
  'Lauren',
  'Wayne',
  'Meriwether',
  'Lonnie',
  'Dutch',
  'Wyatt',
  'Earle',
  'Scriven',
  'Ford',
  'Dixon',
  'Jakeman',
  'Cotterill',
  'Trueman',
  'Darnell',
  'Tittensor',
  'Aylmer',
  'Tanner',
];

const randChoice = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};
const randomAge = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomNumber = () => Math.floor(100000000 + Math.random() * 900000000);

for (let i = 0; i < 20; i++) {
  let obj = {};

  obj.gender = randChoice(genders);

  if (obj.gender === 'M') {
    obj.firstName = randChoice(maleNames);
  } else obj.firstName = randChoice(femaleNames);

  obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  obj.age = randomAge(18, 78);

  obj.phoneNumber = randomNumber();

  obj.mail = `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@gmail.com`;

  people.push(obj);
}

peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('"File has been successfully generated!');
});
