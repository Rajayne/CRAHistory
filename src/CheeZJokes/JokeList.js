import React, { useEffect, useState } from "react";
import useLocalStorageState from "./useLocalStorage";
import Joke from "./Joke";
import axios from "axios";
import "./JokeList.css";

const JokeList = ({ numJokes = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function getJokes() {
        let j = [...jokes];
        let seenJokes = new Set();
        try {
          while (j.length < numJokes) {
            let res = await axios.get("https://icanhazdadjoke.com", {
              headers: { Accept: "application/json" },
            });
            let { ...jokeObj } = res.data;

            if (!seenJokes.has(jokeObj.id)) {
              seenJokes.add(jokeObj.id);
              j.push({ ...jokeObj, votes: 0 });
            } else {
              console.error("duplicate found!");
            }
          }
          setJokes(j);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }

      if (jokes.length === 0) getJokes();
    },
    [jokes, numJokes]
  );

  function generateNewJokes() {
    setJokes([]);
    setIsLoading(true);
  }

  function vote(id, num) {
    setJokes((allJokes) =>
      allJokes.map((j) => (j.id === id ? { ...j, votes: j.votes + num } : j))
    );
  }

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-generate" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      <div className="JokeList-jokes">
        {sortedJokes.map(({ joke, id, votes }) => (
          <Joke text={joke} key={id} id={id} votes={votes} vote={vote} />
        ))}
      </div>
    </div>
  );
};

export default JokeList;
