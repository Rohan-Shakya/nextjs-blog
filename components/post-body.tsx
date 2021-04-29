import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostBody = ({ content }) => {
  return (
    <div className="mx-auto w-75 lead">
      {documentToReactComponents(content)}
    </div>
  );
};

export default PostBody;
