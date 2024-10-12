import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const URL =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/";

function Details() {
  const [detail, setDetail] = useState({});
  const [comics, setComics] = useState([]);
  const [stories, setStories] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);

  const { id } = useParams();
  const getCharacter = async () => {
    const response = await fetch(URL + id);
    const json = await response.json();
    setDetail(json.data.results[0]);
    setComics(json.data.results[0].comics.items);
    setStories(json.data.results[0].stories.items);
    setSeries(json.data.results[0].series.items);
    setEvents(json.data.results[0].events.items);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{detail.name}</h1>
      <h2>comics</h2>
      <ol>
        {comics.map((comic) => (
          <li>{comic.name}</li>
        ))}
      </ol>
      <h2>stories</h2>
      <ol>
        {stories.map((stories) => (
          <li>{stories.name}</li>
        ))}
      </ol>
      <h2>series</h2>
      <ol>
        {series.map((series) => (
          <li>{series.name}</li>
        ))}
      </ol>
      <h2>events</h2>
      <ol>
        {events.map((event) => (
          <li>{event.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Details;
