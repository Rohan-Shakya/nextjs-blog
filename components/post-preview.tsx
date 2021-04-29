import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

const PostPreview = ({ title, coverImage, slug, date, excerpt, author }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 mb-5">
        <div className="col">
          <CoverImage title={title} slug={slug} image={coverImage} />
        </div>

        <h3 className="col mt-2 mb-4 display-5 font-weight-normal">
          <Link href="/posts/[slug]" as={`/posts/${slug}`}>
            {title}
          </Link>
        </h3>
        <div className="col mb-4 h6">
          <DateComponent date={date} />
        </div>

        <div className="col">
          <p className="lead mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </>
  );
};

export default PostPreview;
