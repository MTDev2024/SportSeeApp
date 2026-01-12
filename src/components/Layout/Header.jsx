import { NavLink } from "react-router-dom";
import header_logo from "../../assets/header_logo.png";

function Header() {
  return (
    <header className="bg-secondary h-[91px] flex items-center justify-between px-8">
      <img src={header_logo} alt="Logo SportSee" className="h-[60px]" />
      <nav className="flex gap-40">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
              isActive ? "underline" : ""
            }`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/profil"
          className={({ isActive }) =>
            `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
              isActive ? "underline" : ""
            }`
          }
        >
          Profil
        </NavLink>
        <NavLink
          to="/reglage"
          className={({ isActive }) =>
            `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
              isActive ? "underline" : ""
            }`
          }
        >
          Réglage
        </NavLink>
        <NavLink
          to="/communaute"
          className={({ isActive }) =>
            `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
              isActive ? "underline" : ""
            }`
          }
        >
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
