import React, { Component } from "react";
import { increaseVote } from "../api";

class Voter extends Component {
  state = { hasVoted: false, vote_count: 0 };

  handleClick = (event) => {
    const { article_id } = this.props;
    increaseVote(article_id);
    this.setState({ vote_count: 1, hasVoted: true });
  };
  render() {
    const { votes } = this.props;
    const { vote_count, hasVoted } = this.state;
    return (
      <div>
        <button onClick={this.handleClick} disabled={hasVoted}>
          Love it!
        </button>
        <p>🗳️Votes🗳️:{votes + vote_count}</p>
      </div>
    );
  }
}

export default Voter;
