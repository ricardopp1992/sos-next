const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
  url: `${process.env.GHOST_URL}`,
  key: `${process.env.GHOST_TOKEN}`,
  version: "v3"
});

export const getArticles = async (limit = 'all') => {
  return await api.posts.browse({
    limit:6
  }).catch(err => console.log(err))
};

export async function getrelatedPost (slug) {
  return await api.posts
    .browse({
      limit: 3,
      filter: `tag:${slug}`
    })
    .catch(err => console.error(err));
}

export async function getPost(slug) {
  return await api.posts
    .read({ slug, include: 'tags' })
    .catch(err => {
      console.error(err);
    })
}