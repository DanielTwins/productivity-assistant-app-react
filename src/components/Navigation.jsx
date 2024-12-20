import { Link } from "react-router-dom";
import "../Styles/navigation.css";

function Navigation() {
  return (
    <nav className="links-container">
      <ul className="list-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
