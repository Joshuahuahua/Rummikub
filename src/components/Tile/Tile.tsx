import React from "react";
import styles from "./Tile.module.scss";

// Rummikub Tile Component
export type TileProps = {
  color: "red" | "blue" | "yellow" | "black";
  number: number;
  joker: boolean;
};

export default function Tile(props: TileProps) {
  return (
    <div
      className={styles.Tile}
      style={{
        color: props.color,
      }}
    >
      <p>{props.number}</p>
    </div>
  );
}
