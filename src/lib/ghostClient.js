const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
  url: `${process.env.GHOST_URL}`,
  key: `${process.env.GHOST_TOKEN}`,
  version: "v3"
});

export const getArticles = async (limit = 'all') => {
  return await api.posts.browse({
    limit
  }).catch(err => console.log(err))
};