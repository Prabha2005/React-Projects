// src/components/IndianPlayers.jsx
import React from "react";

export default function IndianPlayers() {
  const players = [
    "Player1","Player2","Player3","Player4","Player5",
    "Player6","Player7","Player8","Player9","Player10","Player11"
  ];

  // example destructuring (grab first two explicitly)
  const [firstPlayer, secondPlayer, ...rest] = players;

  // odd (1st,3rd...) and even (2nd,4th...)
  const oddTeam = players.filter((_, idx) => idx % 2 === 0);
  const evenTeam = players.filter((_, idx) => idx % 2 !== 0);

  // merge arrays (spread)
  const T20players = ["T20-A","T20-B"];
  const RanjiTrophy = ["Ranji-A","Ranji-B"];
  const merged = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Destructured highlights</h2>
      <p>First: {firstPlayer}, Second: {secondPlayer}</p>

      <h3>Odd Team</h3>
      <ul>{oddTeam.map((p,i) => <li key={i}>{p}</li>)}</ul>

      <h3>Even Team</h3>
      <ul>{evenTeam.map((p,i) => <li key={i}>{p}</li>)}</ul>

      <h3>Merged squads</h3>
      <ul>{merged.map((p,i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
}
