import { NavLink } from "react-router-dom";
import header_logo from "../../assets/header_logo.png";

/**
 * Composant Header - Barre de navigation principale
 */
function Header() {
  // Retourne les classes CSS pour les liens (avec soulignement si actif)
  const getNavLinkClass = (isActive) => {
    return `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
      isActive ? "underline" : ""
    }`;
  };

  return (
    <header className="bg-secondary h-[91px] flex items-center px-8 gap-8">
      <img src={header_logo} alt="Logo SportSee" className="h-[60px]" />

      <nav className="flex justify-around flex-1">
        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
          Accueil
        </NavLink>
        <NavLink
          to="/profil"
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          Profil
        </NavLink>
        <NavLink
          to="/reglage"
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          Réglage
        </NavLink>
        <NavLink
          to="/communaute"
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
