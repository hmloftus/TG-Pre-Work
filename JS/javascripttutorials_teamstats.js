const team = {
    _players: [
      {firstName: 'Tony',lastName: 'Smith', age: 17},
          {firstName: 'Bob',lastName: 'Johnson',age: 15},
           {firstName: 'Terry',lastName: 'Hughes',age: 16},
    ],
    _games: [
      {opponent: "Broncos",teamPoints:42,opponentPoints:27}, 
          {opponent:"Steelers",teamPoints:83,opponentPoints:30},
      {opponent: "Chargers",teamPoints:34,opponentPoints:28},
    ],
   
    get games(){
      return this._games;
    },
       get players(){
        return this._players;
  },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,lastName: lastName,age: age,
      }
      this.players.push(player);
    },
    
     addGame(opp, myPts, oppPts) {
       const game = {opponent: opp,points: myPts,opponentPoints:oppPts
        };
       this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players)
  
  team.addGame("Titans", 100, 98);
  team.addGame("Rockies", 64, 76);
  team.addGame("Blue Js", 84, 69);
  
  console.log(team.games)
  
  