import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./Detail.module.css";

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

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Result>();
  const { id } = useParams() as { id: string };
  const getCharacter = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const data: Root = await response.json();
    setCharacter(data.data.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  });
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>{character?.name}</div>
          <img
            className={styles.profileImage}
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          />
          <div className={styles.series}>
            <div className={styles.seriesTitle}>Series list</div>
            {character?.series.items.map((item, index) => (
              <div className={styles.seriesName}>
                <a
                  key={index}
                  href={`https://www.google.com/search?q=${item.name}`}
                  target="_blank"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
