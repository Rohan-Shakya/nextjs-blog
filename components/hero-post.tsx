import Link from "next/link";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import Avatar from "./avatar";

const HeroPost = ({ title, coverImage, slug, date, excerpt, author }) => {
  return (
    <section>
      <div className="my-5">
        <CoverImage title={title} slug={slug} image={coverImage} />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h1 className="mb-4 col font-weight-medium">
            <Link href="/posts/[slug]" as={`/posts/${slug}`}>
              {title}
            </Link>
          </h1>
          <div className="mb-4 h4 col">
            <DateComponent date={date} />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <p className="lead col mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
