import { Link, useHistory } from "react-router-dom";
import { Login } from "../Login/Login";

export function Navbar() {
  let history = useHistory();
  return (
    <div>
      <h2>main</h2>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li
        onClick={() => {
          history.push("/project/4");
        }}
      >
        Project
      </li>
      <Login></Login>
    </div>
  );
}
