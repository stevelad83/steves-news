import React, { Component } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import { Link } from "@reach/router";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, hasError: false, errorMessage: "" };

  componentDidMount() {
    getArticles(this.props.topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.topic !== this.props.topic) {
      getArticles(this.props.topic).then((articles) => {
        this.setState({ articles });
      });
    }
  }
  render() {
    const { articles, isLoading } = this.state;
    const { article_id } = this.props;

    return (
      <main>
        <h2>{article_id}</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <ul>
            {articles.map((article) => (
              <li key={article.article_id}>
                <Link to={`/article/${article.article_id}`}>
                  <h2>{article.title}</h2>
                </Link>
                <p>Author: {article.author}</p>
                <p>Votes:{article.votes}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    );
  }
}

export default ArticlesList;
