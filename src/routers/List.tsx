import { useEffect, useState } from "react";
import ListCharacter from "./ListCharacter";
import styles from "./List.module.css";

export interface Root {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

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

export default function List() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Result[]>([]);

  const getCharacters = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    );
    const data: Root = await response.json();
    setCharacters(data.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacters();
  });
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>Character List</div>
          {characters.map((character, index) => (
            <ListCharacter key={index} character={character} />
          ))}
        </div>
      )}
    </>
  );
}
