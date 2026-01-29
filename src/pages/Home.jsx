import { useNavigate } from "react-router-dom";

/**
 * Page Home - Sélection de l'utilisateur
 * Permet de choisir entre Karl (12) et Cecilia (18)
 */
function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12">
      <h1 className="text-5xl font-medium">
        Bienvenue sur <span className="text-primary">SportSee</span>
      </h1>

      <p className="text-xl text-gray-600">Choisissez votre profil</p>

      <div className="flex gap-8">
        <button
          onClick={() => navigate("/profil/12")}
          className="px-8 py-4 bg-primary text-white rounded-lg text-xl font-medium hover:bg-red-600 transition"
        >
          Karl Dovineau
        </button>

        <button
          onClick={() => navigate("/profil/18")}
          className="px-8 py-4 bg-primary text-white rounded-lg text-xl font-medium hover:bg-red-600 transition"
        >
          Cecilia Ratorez
        </button>
      </div>
    </div>
  );
}

export default Home;
