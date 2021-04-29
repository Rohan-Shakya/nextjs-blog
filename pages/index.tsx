import Layout from "../components/layout";
import Header from "../components/header";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/utils";

export default function Home({ blogs }) {
  const heroPost = blogs[0].fields;
  const morePosts = blogs.slice(1);

  return (
    <Layout>
      <Header />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.customImage.fields.file}
          date={heroPost.date}
          author={heroPost.author.fields}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const items = await getAllPosts();

  return {
    revalidate: 1000,
    props: {
      blogs: items,
    },
  };
};
