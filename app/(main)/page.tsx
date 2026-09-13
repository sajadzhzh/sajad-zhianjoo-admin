import Cards from "@/Components/Dashboard/Cards/Index";
import VisitorsChart from "@/Components/Dashboard/Chart/VisitorsChart";
import DashBoardMessages from "@/Components/Dashboard/Messages/Index";
import RecentProjects from "@/Components/Dashboard/Recent_Projects/Index";

export default function Home() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">صفحه اصلی</h2>
      
      <Cards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <DashBoardMessages />

        <VisitorsChart />
      </div>

      <RecentProjects />
    </div>
  );
}
