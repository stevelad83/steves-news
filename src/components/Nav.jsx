import React, { Component } from "react";
import { getTopics } from "../api";
import { Link } from "@reach/router";
import Loading from "./Loading";

class Nav extends Component {
  state = { topics: [], isLoading: true, hasError: false, errorMessage: "" };

  componentDidMount() {
    getTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((error) => {
        const {
          response: { status },
        } = error;
        this.setState({
          hasError: true,
          isLoading: false,
          errorMessage: `Topic not found...${status}!`,
        });
      });
  }

  render() {
    const { topics, hasError, errorMessage, isLoading } = this.state;
    const { description } = this.props;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <p>{errorMessage}</p>;
    } else {
      return (
        <nav className="Nav">
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
}

export default Nav;
