// Global Variables
let sucessfulHit = Math.floor(Math.random() * (10, 1) + 1);

// Player Objects
let playerOne = {
  name: "USS Assembly",
  health: 100,
  firepower: function firepower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  accuracy: function accuracy(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  turnToAttack: true,
};

let playerTwo = {
  name: "Alien 1",
  health: 100,
  firepower: function firepower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  accuracy: function accuracy(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  turnToAttack: false,
};

// Function List
const attackPlayerOne = (player) => {
  let currentLife = player.health;
  if (playerOne.turnToAttack === true) {
    if (sucessfulHit < player.accuracy(1, 10)) {
      currentLife = player.health -= player.firepower(1, 10);
      console.log(`${player.name} health is now ${currentLife}`);
      //   if (currentLife <= 0) {
      //     alert(`${player.name} has lost the round`);
      //   }
    } else {
      console.log("You missed!");
      console.log(`${player.name} health is now ${currentLife}`);
    }
  }
  playerOne.turnToAttack = false;
  playerTwo.turnToAttack = true;
};

const attackPlayerTwo = (player) => {
  let currentLife = player.health;
  if (playerTwo.turnToAttack === true) {
    if (sucessfulHit < player.accuracy(1, 10)) {
      currentLife = player.health -= player.firepower(1, 10);
      console.log(`${player.name} health is now ${currentLife}`);
      //   if (currentLife <= 0) {
      //     alert(`${player.name} has lost the round`);
      //   }
    } else {
      console.log("You missed!");
      console.log(`${player.name} health is now ${currentLife}`);
    }
  }
  playerTwo.turnToAttack = false;
  playerOne.turnToAttack = true;
};

while (playerOne.health > 0 || playerTwo.health > 0) {
  attackPlayerOne();
  attackPlayerTwo();
}
