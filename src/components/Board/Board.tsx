import React from "react";
import styles from "./Board.module.scss";
import Hand from "../Hand/Hand.tsx";
import Tile, { TileProps } from "../Tile/Tile.tsx";

function generateTiles(): TileProps[] {
  // 106 tiles (2 sets of tiles numbered 1 to 13 in four colors: black, red, blue, orange; 2 Jokers)
  let tiles: TileProps[] = [];
  for (let i = 0; i < 2; i++) {
    for (let color of ["red", "blue", "yellow", "black"]) {
      for (let j = 1; j <= 13; j++) {
        tiles.push({
          color: color,
          number: j,
          joker: false,
        });
      }
    }
    tiles.push({
      color: "black",
      number: 0,
      joker: true,
    });
  }
  return tiles;
}

export default function Board() {
  let bag: TileProps[] = generateTiles().sort(() => Math.random() - 0.5);
  let hand: TileProps[] = bag.slice(0, 8);

  return (
    <div className={styles.Board}>
      <div className={styles.grid}>
        <Tile color="red" number={1} joker={false} />
        <Tile color="red" number={2} joker={false} />
        <Tile color="red" number={3} joker={false} />
        <Tile color="red" number={4} joker={false} />
      </div>

      <div className={styles.toolbar}>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              let newTile = bag.pop();
              console.log(newTile);
              if (newTile) {
                console.log("adding tile to hand");
              }
            }}
          >
            Add Tile
          </button>
          <button
            onClick={() => {
              console.log("shuffling bag");
              bag.sort(() => Math.random() - 0.5);
            }}
          >
            Shuffle Bag
          </button>
        </div>
        <Hand tiles={hand} />
        <div></div>
      </div>
    </div>
  );
}
