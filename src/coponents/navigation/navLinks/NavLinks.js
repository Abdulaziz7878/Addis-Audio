import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          AUDIOS
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-links-margin" to="/audios/new">
          ADD AUDIO
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
