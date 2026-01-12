import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      <main className="ml-[117px] mt-[91px] p-8">{children}</main>
    </div>
  );
}

export default Layout;
