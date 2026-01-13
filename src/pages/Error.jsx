import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-91px)]">
      <h1 className="text-[150px] font-bold text-primary">404</h1>
      <p className="text-body mt-4">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="text-primary underline mt-6 text-nav">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
