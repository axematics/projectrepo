// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let selectedBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      console.log(selectedBase);
      let dnaBases = ['A', 'T', 'C', 'G'];
      switch (selectedBase) {
        case 'A':
          do {
            selectedBase = returnRandBase();
          } while (selectedBase === 'A');
          break;
        case 'T':
          do {
            selectedBase = returnRandBase();
          } while (selectedBase === 'T');
          break;
        case 'C':
          do {
            selectedBase = returnRandBase();
          } while (selectedBase === 'C');
          break;
        case 'G':
          do {
            selectedBase = returnRandBase();
          } while (selectedBase === 'G');
          break;
        default:
          console.log('Error in random generation');
          break;
      };
      //console.log(selectedBase);
      return console.log(selectedBase);
    }
  }
}

let thing = pAequorFactory(1234, ['A','T','C','G','A','G','C'])
//console.log(thing);
//console.log(thing.mutate());
thing.mutate();



