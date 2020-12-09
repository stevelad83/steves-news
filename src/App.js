import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="topic/:topic" />
        <SingleArticle path="/article/:article_id" />
        <ErrorMessage default errorMessage="Page not found!😕" />
      </Router>
    </div>
  );
}

export default App;
