import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * Structure globale de l'application avec header, sidebar et contenu principal
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la page à afficher
 */

function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Sidebar />
      <main className="ml-[117px] mt-[91px]">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
