import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profil from "./pages/Profil";
import Error from "./pages/Error";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Profil />} /> {/* Temporaire*/}
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
