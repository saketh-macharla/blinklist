import GridCard from "./index";
import { BookList } from "../../../components/constants";

export default {
  title: "organisms/Card/GridCard",
  component: GridCard,
};

export const card = () => {
  return <GridCard details={BookList} />;
};
