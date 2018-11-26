

class BattleIterator {
  constructor(player1, player2) {
    this.players = {
      player1,
      player2
    };
  }

  next() {
    const players = state.value.players;
    const winner = getWinner(players);

    winner 
        ? { done: true, value: { winner = winner } } 
        : { done: false, value: {} 
    }
  }
}


function getWinner(players) {
    return Object.keys(players).some(player => player.isDead());
  }