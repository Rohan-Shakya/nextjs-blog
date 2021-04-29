import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getAllPosts = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "sys.createdAt",
  });
  return res.items;
};

export const getPost = async (slug) => {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "sys.createdAt",
  });

  const post = res.items.find((item) => slug == item.fields.slug);

  return post;
};

export const otherPosts = async (slug) => {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "sys.createdAt",
  });

  const filteredPost = res.items.filter((item) => slug !== item.fields.slug);

  return filteredPost;
};
