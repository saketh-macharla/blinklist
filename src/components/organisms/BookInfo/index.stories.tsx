import BookInfo from "./Index";
import beyondEntrepreneur from "../../../assets/BookCovers/beyondentrepreneurship.png";

export default {
  title: "organisms/BookInfo",
  component: BookInfo,
};

export const card = () => {
  // const classes=customStyles();
  return (
    <BookInfo
      bookName="Beyond Entrepreneur 2.0"
      authorName="By Jim Collins and Bill Lazier"
      imgPath={beyondEntrepreneur}
      finish
      id={1}
    />
  );
};
