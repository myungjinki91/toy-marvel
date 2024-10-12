import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

function Home() {
  const [marvels, setMarvels] = useState([]);
  const getMarbles = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    setMarvels(() => json.data.results);
  };
  useEffect(() => {
    getMarbles();
  }, []);
  return (
    <>
      <h1>Marvel characters</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "auto",
          justifyContent: "space-evenly",
        }}
      >
        {marvels.map((marvel) => {
          const img = marvel.thumbnail.path + "." + marvel.thumbnail.extension;
          return (
            <div>
              <Link
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                  fontSize: "32px",
                }}
                to={`/character/${marvel.id}`}
                key={marvel.id}
              >
                <div>{marvel.name}</div>
                <img src={img} alt={`${marvel.name}'s image`} height="500px" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
