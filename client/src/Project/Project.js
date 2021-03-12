
export const Project = (props) => {
    return (
      <div>
        <h2>Project</h2>
        <p>{props.match.params.id}</p>
      </div>
    );
  }