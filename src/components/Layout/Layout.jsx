import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * Composant Layout - Structure globale de l'application
 * Contient le Header, la Sidebar et la zone de contenu principale
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la page à afficher
 */

function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Sidebar />
      <main className="ml-[117px]">{children}</main>
    </div>
  );
}

// Validation des props
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
