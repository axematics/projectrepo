const team = {
    _players: [
      {firstName: 'Heung-Min', lastName: 'Son', age: 31},
      {firstName: 'Guglielmo', lastName: 'Vicario', age: 30},
      {firstName: 'Lionel', lastName: 'Messi', age: 35}
    ],
    _games: [
      {opponent: 'Real Madrid', teamPoints: 3, opponentPoints: 0},
      {opponent: 'Manchester City', teamPoints: 5, opponentPoints: 0},
      {opponent: 'Bayern Munich', teamPoints: 1392, opponentPoints: 0}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName,newLastName,newAge) {
      const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
        };
      this._players.push(player);
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  }
  team.addPlayer('Bugs','Bunny',76);
  console.log(team._players);
  team.addGame('Chelsea',9999,0);
  console.log(team._games);