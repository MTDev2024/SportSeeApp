import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profil from "./pages/Profil";
import Error from "./pages/Error";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen">
      <Layout>
        <Routes>
          <Route path="/" element={<Profil />} /> {/* Temporaire*/}
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
