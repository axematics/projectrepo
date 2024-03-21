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
      let dnaBases = ['A', 'T', 'C', 'G'];
      switch (selectedBase) {
        case 'A':
          while (selectedBase = 'A') {
            selectedBase = returnRandBase();
          };
          break;
        case 'T':
          while (selectedBase = 'T') {
            selectedBase = returnRandBase();
          };
          break;
        case 'C':
          while (selectedBase = 'C') {
            selectedBase = returnRandBase();
          };
          break;
        case 'G':
          while (selectedBase = 'G') {
            selectedBase = returnRandBase();
          };
          break;
        default:
          console.log('Error in random generation');
          break;
      };
      return selectedBase;
    }
  }
}






