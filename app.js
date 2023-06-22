// Global Variables
let sucessfulHit = Math.floor(Math.random() * (10, 1) + 1);
const getRandomNumber = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

// Query Selectors
// "Global"
let body = document.querySelector("body");
let gameHeader = document.querySelector(".gameHeader");
let currentRound = document.querySelector(".roundHeader");
let feed = document.querySelector(".feed");
// Player One
let playOneHeader = document.querySelector(".playerOneHeader");
let playerOneName = document.querySelector(".playerOneName");
playerOneHealth = document.querySelector(".playerOneHealth");
let heroImg = document.querySelector(".hero");
// Player Two
let playerTwoHeader = document.querySelector(".playerTwoHeader");
let playerTwoName = document.querySelector(".playerTwoName");
playerTwoHealth = document.querySelector(".playerTwoHealth");
let alienImg = document.querySelector(".alien");

// Player Objects
let playerOne = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 7,
  turnToAttack: true,
  image:
    "https://media.tenor.com/oHgHEzWWAFQAAAAC/space-adventure-cobra-spaceship.gif",
};

let alienOne = {
  name: "Kang & Konos",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image: "https://media.tenor.com/st8PxZ-amRsAAAAC/kang-kodos.gif",
};
let alienTwo = {
  name: "Roger The Alien",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image:
    "https://media1.giphy.com/media/XuApq8Jm12KIw/200w.gif?cid=6c09b952iemvqr46evemxfbmoghf246x713o05g27t61ecf2&ep=v1_gifs_search&rid=200w.gif&ct=g",
};

let alienThree = {
  name: "Invader Zim",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image: "https://i.gifer.com/NYt7.gif",
};

let alienFour = {
  name: "Dr. Zoidburg",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image: "https://media2.giphy.com/media/jbxQLpOKN2URa/giphy.gif",
};

let alienFive = {
  name: "Lrrr",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image:
    "https://pa1.aminoapps.com/6819/2a161e8efde898096cbce4391b0022b980a41ed0_hq.gif",
};

let alienSix = {
  name: "Thanos",
  hull: getRandomNumber(3, 6),
  firepower: getRandomNumber(2, 4),
  accuracy: getRandomNumber(6, 8),
  turnToAttack: false,
  image:
    "https://pa1.aminoapps.com/6819/2a161e8efde898096cbce4391b0022b980a41ed0_hq.gif",
};

let alienScum = [
  alienOne,
  alienTwo,
  alienThree,
  alienFour,
  alienFive,
  alienSix,
];
let playerTwo = alienOne;
let counter = 0;

currentRound.innerHTML = `${counter}`;
playerOneName.innerHTML = `${playerOne.name}`;
playerTwoName.innerHTML = `${playerTwo.name}`;
playerOneHealth.innerHTML = `${playerOne.hull}`;
playerTwoHealth.innerHTML = `${playerTwo.hull}`;
heroImg.setAttribute("src", playerOne.image);
alienImg.setAttribute("src", playerTwo.image);

// Function List
const heroHP = () => {
  if (playerTwo.hull <= 0) {
    alert("Game Over");
  } else {
    startRound(playerTwo);
  }
};

const alienHP = () => {
  if (playerTwo.hull <= 0) {
    alert(`${playerTwo.name} has lost this round`);
    switchAlien();
    counter += 1;
    playerTwo = alienScum[counter];
  } else {
    setTimeout(() => {
      alienAttack();
      heroHP();
    }, "6000");
  }
};

const startRound = () => {
  heroAttack();
  alienHP();
};

const heroAttack = () => {
  setTimeout(() => {
    feed.innerHTML = `${playerOne.name} is preparing to fire!`;
  }, "2000");
  let currentLife = playerOne.hull;
  if (playerOne.turnToAttack === true) {
    if (sucessfulHit < playerOne.accuracy) {
      currentLife = playerTwo.hull -= playerOne.firepower;
      setTimeout(() => {
        feed.innerHTML = `${playerOne.name} has fired!`;
      }, "3000");
      setTimeout(() => {
        feed.innerHTML = `${playerOne.name}'s hit was sucuccessful!`;
      }, "5000");
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name} health is now ${currentLife}`;
      }, "6000");
      setTimeout(() => {
        playerTwoHealth.innerHTML = `${currentLife}`;
      }, "6000");
    } else {
      setTimeout(() => {
        feed.innerHTML = `${playerOne.name}'s attack was unsecessful!`;
      }, "3000");
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name} health is now ${currentLife}`;
      }, "5000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "5000");
    }
  }
  playerOne.turnToAttack = false;
  playerTwo.turnToAttack = true;
};

const alienAttack = () => {
  let currentLife = playerTwo.hull;
  if (playerTwo.turnToAttack === true) {
    if (sucessfulHit < playerTwo.accuracy) {
      currentLife = playerTwo.hull -= playerOne.firepower;
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name} has fired!`;
      }, "2000");
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name}'s hit was sucuccessful!`;
      }, "3000");
      setTimeout(() => {
        feed.innerHTML = `${playerOne.name} health is now ${currentLife}`;
      }, "5000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "5000");

      if (currentLife <= 0) {
        setTimeout(() => {
          feed.innerHTML = `${playerTwo.name} has lost the round`;
        }, "1000");
      }
    } else {
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name}'s attack was unsecessful!`;
      }, "5000");
      setTimeout(() => {
        feed.innerHTML = `${playerTwo.name} health is now ${currentLife}`;
      }, "6000");
      setTimeout(() => {
        playerOneHealth.innerHTML = `${currentLife}`;
      }, "6000");
    }
  }
  playerTwo.turnToAttack = false;
  playerOne.turnToAttack = true;
};

switchAlien = (playerTwo) => {
  playerTwo = alienScum[counter];
  alienImg.setAttribute("src", playerTwo.image);
  playerTwoName.replaceWith = `${playerTwo.name}`;
  playerTwoHealth.innerHTML = `${playerTwo.hull}`;
  // feed.innerHTML = "NEW OPPONENT!";
  // setTimeout(() => {
  //   feed.innerHTML = `Now Battling ${playerTwo.name}`;
  // }, "1000");
};

const resetGame = () => {
  playerTwo = alienScum[0];
};
