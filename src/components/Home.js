import Notes from "./Notes";

export const Home = (props) => {
  const { handleAlert } = props;
  return (
    <div>
      <Notes handleAlert={handleAlert} />
    </div>
  );
};
