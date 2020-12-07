import axios from "axios";

const stevesNewsApi = axios.create({
  baseURL: "https://stevelads-server.herokuapp.com/api",
});

export const getTopics = () => {
  return stevesNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (article_id) => {
  return stevesNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
