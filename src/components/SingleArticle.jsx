import React, { Component } from "react";
import { getSingleArticle } from "../api";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;

    return (
      <div>
        <h2>{article.title}</h2>
        <p>
          Written by {article.author} on {article.created_at}
        </p>
        <p>Topic: {article.topic}</p>
        <p>Article ID: {article.article_id}</p>

        <div>
          <p>🗳️Votes🗳️: {article.votes}</p>
          <p>Comment count: {article.comment_count}</p>
        </div>
      </div>
    );
  }
}

export default SingleArticle;
