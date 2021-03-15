export const ProjectSettings = (props) => {
  return (
    <div>
      <h2>ProjectSettings</h2>
      <p>{props.match.params.id}</p>
    </div>
  );
};
