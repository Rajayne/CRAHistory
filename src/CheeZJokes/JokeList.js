import React, { useState } from "react";
import Joke from "./Joke";

const JokeList = () => {
  const numJokes = 5;
  const [seenJokes, setSeenJokes] = useState(new Set());
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <h1>Joke List</h1>
      <Joke />
    </div>
  );
};

export default JokeList;

/*
  async getJokes() {
    try {
      // load jokes one at a time, adding not-yet-seen jokes
      let jokes = [];
      let seenJokes = new Set();

      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokes.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }

      this.setState({ jokes, isLoading: false });
    } catch (err) {
      console.error(err);
    }
  }

  generateNewJokes() {
    this.setState({ isLoading: true});
    this.getJokes();
  }

  vote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }));
  }

  render() {
    let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    if (this.state.isLoading) {
      return (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      )
    }

    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={this.generateNewJokes}
        >
          Get New Jokes
        </button>

        {sortedJokes.map(j => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={this.vote}
          />
        ))}
      </div>
    );
  }
  */
