// Global Variables
let sucessfulHit = Math.floor(Math.random() * (10, 1) + 1);

let round = 1;
let i = 0;
let j = 0;

// Query Selectors
// "Global"
let body = document.querySelector("body");
let gameHeader = document.querySelector(".gameHeader");
let currentRound = document.querySelector(".roundHeader");
// Player One
let playOneHeader = document.querySelector(".playerOneHeader");
let playerOneName = document.querySelector(".playerOneName");
playerOneHealth = document.querySelector(".playerOneHealth");
let playerOneFeed = document.querySelector(".playerOneFeed");
// Player Two
let playerTwoHeader = document.querySelector(".playerTwoHeader");
let playerTwoName = document.querySelector(".playerTwoName");
playerTwoHealth = document.querySelector(".playerTwoHealth");
let playerTwoFeed = document.querySelector(".playerTwoFeed");
let alien = document.querySelector(".alien");

// Player Objects
let playerOne = {
  name: "USS Assembly",
  health: 20,
  firepower: function firepower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  accuracy: function accuracy(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  turnToAttack: true,
};

let playerTwo = {
  name: ["Kang", "Kodos", "Gazoo", "Zim", "Roger", "Zoidburg"],
  health: 20,
  firepower: function firepower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  accuracy: function accuracy(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  turnToAttack: false,
  image: [
    "https://media.tenor.com/RlxrgBXn_tMAAAAd/alien-attack-war-of-the-worlds.gif",
    "https://i.pinimg.com/originals/e7/40/2c/e7402cbdb59722ba7e226b63748d1a69.gif",
    "https://cdn3.whatculture.com/images/2014/08/aliens-colonial-marines-dance-600x338.gif",
    "https://townsquare.media/site/442/files/2018/03/infinitywargif5.gif",
    "https://media3.giphy.com/media/3o7TKsWZbKd2dVqqPu/200w.gif?cid=6c09b952kbdbvm0c4cnl80i64jhnxt7zqnxzo1h0afav0aru&ep=v1_gifs_search&rid=200w.gif&ct=g",
    "https://cinemasiren.com/wp-content/uploads/2014/11/alien-gif.gif",
  ],
};

// Function List

const startRound = (player) => {
  playerOneHealth.innerHTML = `${playerOne.health}`;
  playerTwoHealth.innerHTML = `${playerTwo.health}`;
  playerOneFeed.innerHTML = "";
  playerTwoFeed.innerHTML = "";
  while (playerOne.health > 0 || playerTwo.health > 0) {
    setInterval(() => {
      attackPlayerTwo(player);
    }, 16000);
    setInterval(() => {
      attackPlayerOne(player);
    }, 32000);
  }
};

const attackPlayerTwo = (player) => {
  setTimeout(() => {
    playerTwoFeed.innerHTML = `${player.name} is preparing to fire!`;
  }, "2000");
  let currentLife = player.health;
  if (playerOne.turnToAttack === true) {
    if (sucessfulHit < player.accuracy(1, 10)) {
      currentLife = player.health -= player.firepower(1, 10);
      setTimeout(() => {
        playerTwoFeed.innerHTML = `${player.name} has fired!`;
      }, "3000");
      setTimeout(() => {
        playerTwoFeed.innerHTML = `${player.name}'s hit was sucuccessful!`;
      }, "5000");
      setTimeout(() => {
        playerTwoFeed.innerHTML = `${playerTwo.name[i]} health is now ${currentLife}`;
      }, "6000");
      setTimeout(() => {
        playerTwoHealth.innerHTML = `${currentLife}`;
      }, "6000");

      if (currentLife <= 0) {
        setTimeout(() => {
          playerTwoFeed.innerHTML = `${playerOne.name} has lost the round`;
        }, "1000");
        nextRound();
      }
    } else {
      setTimeout(() => {
        playerTwoFeed.innerHTML = `${player.name}'s attack was unsecessful!`;
      }, "3000");
      setTimeout(() => {
        playerTwoFeed.innerHTML = `${player.name} health is now ${currentLife}`;
      }, "5000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "5000");
    }
  }
  playerOne.turnToAttack = false;
  playerTwo.turnToAttack = true;
};

const attackPlayerOne = (player) => {
  let currentLife = player.health;
  if (playerTwo.turnToAttack === true) {
    if (sucessfulHit < player.accuracy(1, 10)) {
      currentLife = player.health -= player.firepower(1, 10);
      setTimeout(() => {
        playerOneFeed.innerHTML = `${player.name[i]} has fired!`;
      }, "18000");
      setTimeout(() => {
        playerOneFeed.innerHTML = `${player.name[i]}'s hit was sucuccessful!`;
      }, "20000");
      setTimeout(() => {
        playerOneFeed.innerHTML = `${playerOne.name} health is now ${currentLife}`;
      }, "21000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "21000");

      if (currentLife <= 0) {
        setTimeout(() => {
          playerOneFeed.innerHTML = `${playerTwo.name[i]} has lost the round`;
        }, "1000");
      }
    } else {
      setTimeout(() => {
        playerOneFeed.innerHTML = `${player.name[i]}'s attack was unsecessful!`;
      }, "20000");
      setTimeout(() => {
        playerOneFeed.innerHTML = `${player.name[i]} health is now ${currentLife}`;
      }, "21000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "21000");
    }
  }
  playerTwo.turnToAttack = false;
  playerOne.turnToAttack = true;
};

const nextRound = () => {
  if (round < 6) {
    round += 1;
    currentRound.innerHTML = `Round <br>${round}`;
    if (i < playerTwo.name.length) {
      i += 1;
      playerTwo.name.innerHTML = `${playerTwo.name[i]}`;
    }
    // if (j < playerTwo.image.length) {
    //   j += 1;
    //   alien.setAttribute(src, playerTwo.image[j]);
    // }
  } else {
    console.log("Game Over");
  }
  startRound();
};

currentRound.innerHTML = `Round: <br>${round}`;
playerOneName.innerHTML = `${playerOne.name}`;
playerTwoName.innerHTML = `${playerTwo.name[i]}`;
playerOneHealth.innerHTML = `${playerOne.health}`;
playerTwoHealth.innerHTML = `${playerTwo.health}`;
