import { Link } from 'react-router-dom';


export const Main = (props) => {
    return (
      <div>
        <h2>main</h2>        
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li onClick={() => {
            props.history.push('/project/4')
        }}>
          Project
        </li>
      </div>
    );
  }