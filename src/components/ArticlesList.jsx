import React, { Component } from "react";
import { getArticles } from "../api";

class ArticlesList extends Component {
  state = { articles: [] };

  componentDidMount() {
    getArticles(this.props.topic).then((articles) => {
      this.setState({ articles });
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
    const { articles } = this.state;
    const { article_id } = this.props;

    return (
      <main>
        <h2>{article_id}</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ArticlesList;
