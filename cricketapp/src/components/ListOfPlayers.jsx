// src/components/ListOfPlayers.jsx
import React from "react";

export default function ListOfPlayers() {
  const players = [
    { name: "Mr. Dhoni", score: 85 },
    { name: "Mr. Ruturaj", score: 74 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Dube", score: 58 },
    { name: "Mr. Rahane", score: 45 },
    { name: "Mr. Conway", score: 90 },
    { name: "Mr. Moeen Ali", score: 66 },
    { name: "Mr. Santner", score: 39 },
    { name: "Mr. Chahar", score: 25 },
    { name: "Mr. Gaikwad", score: 72 },
    { name: "Mr. Stokes", score: 50 },
  ];

  // map to list all
  const allPlayersList = players.map((p, i) => (
    <li key={i}>{p.name} {p.score}</li>
  ));

  // filter for scores < 70
  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>{allPlayersList}</ul>
      <hr />
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name} {p.score}</li>
        ))}
      </ul>
    </div>
  );
}
