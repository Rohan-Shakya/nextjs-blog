import Link from "next/link";
import Image from "next/image";

const CoverImage = ({ title, slug, image }) => {
  const img = (
    <Image
      src={`https:${image.url}`}
      width={image.details.image.width}
      height={image.details.image.height}
      alt={`Cover Image for ${title}`}
      className="img-fluid rounded"
    />
  );
  return (
    <div className="mx-0">
      {slug ? (
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a aria-label={title}>{img}</a>
        </Link>
      ) : (
        img
      )}
    </div>
  );
};

export default CoverImage;
