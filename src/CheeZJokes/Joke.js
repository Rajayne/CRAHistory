import React from "react";
import "./Joke.css";

const Joke = ({ vote, votes, text, id }) => {
  function upVote(evt) {
    vote(id, +1);
  }
  function downVote(evt) {
    vote(id, -1);
  }

  return (
    <div className="Joke">
      <div className="Joke-text">{text}</div>
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>
        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        <p>{votes}</p>
      </div>
    </div>
  );
};

export default Joke;
