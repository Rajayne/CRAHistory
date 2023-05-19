import React, { useState } from "react";
import Joke from "./Joke";
import axios from "axios";

const JokeList = () => {
  const numJokes = 5;
  const [seenJokes, setSeenJokes] = useState(new Set());
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getJokes() {
    try {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });

      let joke = res.data;

      setJokes({ ...joke });
      console.log(jokes);

      if (!seenJokes.has(joke.id)) {
        seenJokes.add(joke.id);
        jokes.push({ ...joke, votes: 0 });
      } else {
        console.log("duplicate found!");
      }

      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  } else {
    <div>
      <h1>Joke List</h1>
      {/* <button className="JokeList-button" onClick={generateNewJokes}>
        Get New Jokes
      </button> */}
      {sortedJokes.map((j) => (
        <Joke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          // vote={handleVote}
        />
      ))}
    </div>;
  }
};

export default JokeList;
