import HeadingWrapper from "./heading.styled";

type HeadingProps = {
  title: string;
  description: string;
}

const Heading = (props: HeadingProps) => {
  const {title = "Title", description = "Description"} = props;
  return (
    <HeadingWrapper>
      <div className="heading">
        <h1>
          {title}<span>{description}</span>
        </h1>
      </div>
    </HeadingWrapper>
  );
};

export default Heading;
