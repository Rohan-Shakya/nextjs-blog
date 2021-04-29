import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getAllPosts, getPost, otherPosts } from "../../lib/utils";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";

const Page = ({ post, morePosts }) => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Header />
        {router.isFallback || !post ? (
          <h1>Loading</h1>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta
                  property="og:image"
                  content={post.fields.customImage.fields.file.url}
                />
              </Head>
              <PostHeader
                title={post.fields.title}
                coverImage={post.fields.customImage.fields.file}
                date={post.fields.date}
                author={post.fields.author.fields}
              />
              <PostBody content={post.fields.content} />
              <hr className="py-5" />
              {morePosts && morePosts.length > 0 && (
                <MoreStories posts={morePosts} />
              )}
            </article>
          </>
        )}
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const morePosts = await otherPosts(params.slug);

  return {
    revalidate: 1000,
    props: {
      post: post ? post : null,
      morePosts: morePosts ? morePosts : null,
    },
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();

  const slugs = allPosts.map((item) => {
    const slug = item.fields.slug;
    return `/posts/${slug}`;
  });

  return {
    paths: slugs?.map((slug) => ({ params: { slug } })) ?? [],
    fallback: true,
  };
};

export default Page;
