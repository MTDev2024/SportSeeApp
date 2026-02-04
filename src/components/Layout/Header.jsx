import { NavLink, useLocation } from "react-router-dom";
import header_logo from "../../assets/header_logo.png";

/**
 * Barre de navigation principale avec logo et liens
 * Le lien "Profil" s'adapte automatiquement à l'utilisateur actuel dans l'URL
 */

function Header() {
  const location = useLocation();

  // Extrait l'ID de l'utilisateur depuis l'URL actuelle
  // Si /profil/12 → currentId = "12"
  // Si /profil/18 → currentId = "18"
  // défaut = "12" (Karl)
  const currentId = location.pathname.includes("/profil/")
    ? location.pathname.split("/profil/")[1]
    : "12";

  // Classes CSS pour les liens
  const getNavLinkClass = (isActive) => {
    return `text-nav font-medium text-white hover:opacity-80 transition-opacity ${
      isActive ? "underline" : ""
    }`;
  };

  return (
    <header className="bg-secondary h-[91px] flex items-center px-8 gap-8 fixed top-0 left-0 right-0 z-10">
      <img src={header_logo} alt="Logo SportSee" className="h-[60px]" />

      <nav className="flex justify-around flex-1">
        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
          Accueil
        </NavLink>

        {/* Lien Profil dynamique : utilise l'ID de l'URL actuelle */}
        <NavLink
          to={`/profil/${currentId}`}
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
