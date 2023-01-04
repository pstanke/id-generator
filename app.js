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

const generateMail = (firstName, lastName) => {
  const mail = `${firstName}.${lastName}@gmail.com`;
  return mail.toLowerCase();
};

for (let i = 0; i < 20; i++) {
  const person = {};

  person.gender = randChoice(genders);

  person.gender === 'M'
    ? (person.firstName = randChoice(maleNames))
    : (person.firstName = randChoice(femaleNames));

  person.lastName = randChoice(lastNames);

  person.age = randomAge(18, 78);

  person.phoneNumber = randomNumber();

  person.mail = generateMail(person.firstName, person.lastName);

  people.push(person);
}

peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('"File has been successfully generated!');
});
