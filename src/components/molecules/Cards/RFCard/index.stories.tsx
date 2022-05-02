import SingleCard from "./index";
import bringyourhuman from "../../../../assets/BookCovers/bringyourhumantowork.png";
import { customStyles } from "../../../../theme";
import Person from "../../../../assets/Image/Person.png";
import Time from "../../../../assets/Image/Time.png";

export default {
  title: "organisms/Card/SimpleCard",
  component: SingleCard,
};

export const card = () => {
  const classes = customStyles();
  return (
    <SingleCard
      handleClick={() => {}}
      id={0}
      finished={false}
      imgsrc={bringyourhuman}
      bookName="Bring Your Human To Work"
      authorName="Eric Keswin"
      time="13-minute read"
      nReads="1.9k reads"
      icon1={Time}
      icon2={Person}
    />
  );
};
