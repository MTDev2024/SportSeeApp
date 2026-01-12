function Profil() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-hero font-medium">Bonjour Thomas</h1>
        <p className="text-body font-normal mt-4">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      {/* graphiques + cards*/}
      <div className="grid grid-cols-3 gap-6">
        {/* Zone graphiques */}
        <div className="col-span-2">
          <p></p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Zone cards (calories, protéines, etc.) */}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
