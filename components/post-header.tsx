import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <h1 className="col heading-1-responsive display-3 font-weight-bold py-3">
        {title}
      </h1>
      <div className="mb-5 col">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-5">
        <CoverImage title={title} slug={null} image={coverImage} />
      </div>
      <div className="mx-auto w-75 mb-3">
        <DateComponent date={date} />
      </div>
    </>
  );
};

export default PostHeader;
