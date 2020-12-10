import axios from "axios";

const stevesNewsApi = axios.create({
  baseURL: "https://stevelads-server.herokuapp.com/api",
});

export const getTopics = () => {
  return stevesNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by, order) => {
  return stevesNewsApi
    .get("/articles", { params: { topic: topic, limit: 20, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return stevesNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return stevesNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      console.log(data);
      return data.comments;
    });
};

export const increaseVote = (article_id) => {
  return stevesNewsApi.patch(`/articles/${article_id}`, { vote: 1 });
};
