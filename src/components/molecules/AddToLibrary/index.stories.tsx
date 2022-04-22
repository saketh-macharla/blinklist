import AddtoLib from "./index";

export default {
  title: "molecules/AddtoLibrary",
  component: AddtoLib,
};

export const card = () => {
  return <AddtoLib handleClick={() => {}} />;
};
