import styles from "./ListCharacter.module.css";
import { Link } from "react-router-dom";

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Item2 {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

export interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

export interface Item4 {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}

export default function ListCharacter({
  character,
}: {
  key: number;
  character: Result;
}) {
  return (
    <Link to={`/characters/${character.id}`} className={styles.character}>
      <img
        className={styles.image}
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <div className={styles.info}>
        <div className={styles.name}>{character.name}</div>
        <div className={styles.series}>{character.series.items[0].name}</div>
      </div>
    </Link>
  );
}
