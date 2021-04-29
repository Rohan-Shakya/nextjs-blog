import PostPreview from "./post-preview";

const MoreStories = ({ posts }) => {
  return (
    <section>
      <h1 className="col font-weight-bolder my-5">More Stories</h1>

      <div className="row">
        {posts.map((post) => {
          return (
            <PostPreview
              title={post.fields.title}
              coverImage={post.fields.customImage.fields.file}
              date={post.fields.date}
              author={post.fields.author.fields}
              slug={post.fields.slug}
              excerpt={post.fields.excerpt}
              key={post.sys.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoreStories;
