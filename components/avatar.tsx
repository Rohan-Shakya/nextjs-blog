const Avatar = ({ name, picture }) => {
  return (
    <div className="d-flex align-items-center">
      <style jsx>
        {`
          .author-img {
            width: 60px;
            height: 60px;
          }
        `}
      </style>
      <img
        src={`https:${picture.fields.file.url}`}
        width={picture.fields.file.details.image.width}
        height={picture.fields.file.details.image.height}
        alt={picture.description}
        className="rounded-circle mr-4 author-img"
      />
      <a href="" className="display-5 font-weight-normal">
        {name}
      </a>
    </div>
  );
};

export default Avatar;
