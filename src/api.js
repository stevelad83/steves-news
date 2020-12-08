import axios from "axios";

const stevesNewsApi = axios.create({
  baseURL: "https://stevelads-server.herokuapp.com/api",
});

export const getTopics = () => {
  return stevesNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic) => {
  return stevesNewsApi
    .get("/articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return stevesNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
