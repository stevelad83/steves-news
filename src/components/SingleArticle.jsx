import React, { Component } from "react";
import { getSingleArticle } from "../api";
import Loading from "./Loading";
import Voter from "./Voter";
import ErrorMessage from "./ErrorMessage";
import { increaseVote } from "../api";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    hasError: false,
    errorMessage: "",
    hasVoted: false,
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((error) => {
        const {
          response: { status },
        } = error;
        this.setState({
          hasError: true,
          isLoading: false,
          hasVoted: false,
          errorMessage: `Article not found...${status}!`,
        });
      });
  }
  handleClick = (event) => {
    increaseVote(this.state.article.article_id).catch((error) => {
      const {
        response: { status },
      } = error;
      this.setState((currentState) => {
        const newState = {
          isLoading: false,
          hasVoted: true,
          article: {
            ...currentState.article,
            votes: currentState.article.votes + 1,
          }.t,
        };
        return newState;
      });
    });
  };

  render() {
    const { article, hasError, errorMessage, isLoading, hasVoted } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessage errorMessage="Oops!" />;
    } else {
      return (
        <article>
          <h2>{article.title}</h2>
          <p>
            Written by {article.author} on{" "}
            {<p>{new Date(article.created_at).toLocaleDateString("en-gb")}</p>}
          </p>
          <p>Topic: {article.topic}</p>
          <p>Article ID: {article.article_id}</p>
          <p>{article.body}</p>

          <div>
            <Voter votes={article.votes} article_id={article.article_id} />

            <p>Comment count: {article.comment_count}</p>

            <Comments article_id={this.props.article_id} />
          </div>
        </article>
      );
    }
  }
}

export default SingleArticle;
