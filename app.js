"use strict";

// function calcAge (birthYear) {
//     const age = 2037 - birthYear;

//     function printAge () {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         // console.log(output);

//         const isMillenial = birthYear >= 1981 && birthYear <= 1996;

//         if (isMillenial) {
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             // console.log(str);
//         } else {
//             // console.log(`Oh, you're not a millenial, ${firstName}`);
//         }
//     }

//     printAge();

//     return age;
// }

// // const firstName = 'Khalifa';
// // // calcAge(2000);
// // console.log(me);
// // console.log(job);
// // console.log(year);

// // var me = 'khalifa';
// // let job = 'frontend dev';
// // const year = 2000;

// const khalifa = {
//     firstName: 'Khalifa',
//     lastName: 'BEYE',
//     age: 25
// }

// const khalifaMarried = {
//     lastName: 'BEYE kilifeu'
// }

// const khalifaFusion = Object.assign(khalifa, khalifaMarried);

// console.log(khalifaFusion);

const openingHours = {
  thu: {
    open: 11,
    close: 20,
  },

  fri: {
    open: 15,
    close: 18,
  },

  sat: {
    open: 9,
    close: 22,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizaa", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // to switch their values:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p, q, r] = [8, 9];

// const { name, mainMenu, categories } = restaurant;
// console.log(name , mainMenu, categories);

// const { name: resName, location: resLocation, categories: tags } = restaurant;

// console.log(resName, resLocation, tags);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [goal, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${playerName}`);
// }

let oddSum = 0;
let oddAvr = 0;
const oddsArr = Object.values(game.odds);
console.log(oddsArr);
for (const odd of oddsArr) {
  oddSum += odd;
  oddAvr = oddSum / oddsArr.length;
  // console.log(oddSum, oddAvr);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = game[team];
  // console.log(`Odd of victory ${teamName}: ${odd}`);
}

let scoredPlayer = {};
for (const player of game.scored.values()) {
  scoredPlayer[player] = scoredPlayer[player] ? scoredPlayer[player] + 1 : 1;
}

// console.log(scoredPlayer);

// for (const [i, player] of game.scored.entries()) {
//   // console.log(i, player);
//   let [playerName, goal] = [player, 0];

//   for (const p of game.scored.values()) {
//     if (playerName == p) goal += 1;
//   }

//   console.log(`${playerName} scored ${goal} goals`);

// }
// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('messi', 'ronaldo')

// team1 < team2 && console.log('Team 1 is more likely to win');

// team1 < team2 || console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [index, entry] of menu.entries()) {
//   const menuList = `${index + 1}: ${entry}`;
//   console.log(menuList);
// }

// console.log([...menu.entries()]);

// console.log(restaurant?.openingHours);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const workAt = restaurant.openingHours[day]?.open ? 'we are open at ' + restaurant.openingHours[day]?.open : 'we do not work';
//   const open = `On ${day} ${workAt}`;
//   console.log(open);
// }

// console.log(restaurant.order?.(0,1) ?? 'Method inexistant');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method inexistant');

// for (const [dayName, {open, close}] of Object.entries(openingHours)) {
//   console.log(dayName, open, close);
// }

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
// console.log(events);

gameEvents.delete(64)
// console.log(gameEvents);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

let eventTimeString = '';
for (const [time, event] of gameEvents) {
  let firstHalf = time <= 45;
  if (firstHalf) {
    eventTimeString = `[FIRST HALF] ${time}: ${event}`
  } else {
    eventTimeString = `[SECOND HALF] ${time}: ${event}`
  }

  console.log(eventTimeString);
}