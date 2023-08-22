import React from 'react';
import styles from './Hand.module.scss';
import Tile, { TileProps } from '../Tile/Tile.tsx';

export default function Hand(props: { tiles: TileProps[] }) {
  return (
    <div className={styles.Hand}>
      {props.tiles.map((tile) => {
        return <Tile color={tile.color} number={tile.number} joker={tile.joker} />
      })}
    </div>
  );
}