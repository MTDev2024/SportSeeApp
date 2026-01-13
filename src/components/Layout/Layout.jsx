import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Sidebar />
      <main className="ml-[117px]">
        {/* ← Plus de p-8 ici */}
        {children}
      </main>
    </div>
  );
}

export default Layout;
