
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/Coffee-Cat">Hem</Link></li>
        <li><Link to="/cat">Cat</Link></li>
        <li><Link to="/coffee">Coffee</Link></li>
      </ul>
    </nav>
  );

}