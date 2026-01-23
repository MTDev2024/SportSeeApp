import yoga from "../../assets/yoga.png";
import swim from "../../assets/swim.png";
import cycle from "../../assets/cycle.png";
import muscle from "../../assets/muscle.png";

/**
 * Composant Sidebar - Barre latérale avec icônes d'activités
 */
function Sidebar() {
  return (
    <aside
      className="bg-secondary w-[117px] min-h-[calc(100vh-91px)] fixed left-0 top-[91px] flex flex-col items-center py-6"
      aria-label="Navigation latérale"
    >
      <nav
        className="flex flex-col gap-5 mt-auto mb-auto"
        aria-label="Activités sportives"
      >
        <div
          className="bg-white h-[64px] w-[64px] rounded-md flex items-center justify-center"
          aria-hidden="true"
        >
          <img src={yoga} alt="" className="h-[32px] w-[32px]" />
        </div>
        <div
          className="bg-white h-[64px] w-[64px] rounded-md flex items-center justify-center"
          aria-hidden="true"
        >
          <img src={swim} alt="" className="h-[32px] w-[32px]" />
        </div>
        <div
          className="bg-white h-[64px] w-[64px] rounded-md flex items-center justify-center"
          aria-hidden="true"
        >
          <img src={cycle} alt="" className="h-[32px] w-[32px]" />
        </div>
        <div
          className="bg-white h-[64px] w-[64px] rounded-md flex items-center justify-center"
          aria-hidden="true"
        >
          <img src={muscle} alt="" className="h-[32px] w-[32px]" />
        </div>
      </nav>

      {/* Copyright */}
      <p className="absolute bottom-24 left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap text-white text-small font-medium">
        Copyright, SportSee 2020
      </p>
    </aside>
  );
}

export default Sidebar;
