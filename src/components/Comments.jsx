import React, { Component } from "react";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getCommentsByArticleId } from "../api";

class Comments extends Component {
  state = {
    comments: {},
    isLoading: true,
    hasError: false,
    errorMessage: "",
  };

  componentDidMount() {
    getCommentsByArticleId(this.props.article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((error) => {
        const {
          response: { status },
        } = error;
        this.setState({
          hasError: true,
          isLoading: false,
          errorMessage: `Comments not found...${status}!`,
        });
      });
  }

  render() {
    const { comments, hasError, errorMessage, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <p>{errorMessage}</p>;
    } else {
      return (
        <div>
          <h2>{comments.comment_id}</h2>
          <p>Comments {comments.body}</p>
        </div>
      );
    }
  }
}

export default Comments;