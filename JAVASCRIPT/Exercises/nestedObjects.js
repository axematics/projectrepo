let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [
  {person1: {
    firstName: 'Axel',
    lastName: 'Thomas',
    IQ: 9001
    }
  },
  {person2: {
    firstName: 'Isolde',
    lastName: 'Kirschke',
    IQ: 9000
    } 
  }
]

let firstPassenger = spaceship.passengers[0].person1.firstName;
let secondPassenger = spaceship.passengers[1].person2.firstName;

console.log(`Two of the passengers on the spaceship, ${firstPassenger} and ${secondPassenger} were madly in love with each other.`);