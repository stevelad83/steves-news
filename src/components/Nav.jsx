import React, { Component } from "react";
import { getTopics } from "../api";
import { Link } from "@reach/router";

class Nav extends Component {
  state = { topics: [] };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    const { description } = this.props;
    return (
      <nav>
        <h2>{description}</h2>
        <ul>
          {topics.map((topic) => {
            return (
              <Link to={`/topic/${topic.slug}`} key={topic.slug}>
                <h2>{topic.slug}</h2>
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
