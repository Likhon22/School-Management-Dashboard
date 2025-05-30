import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import StatCard from "@/components/ui/StatCard";

const AdminPage = () => {
  return (
    <div
      className="
    mt-6 flex gap-4 flex-col md:flex-row"
    >
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <StatCard type="student" />
          <StatCard type="teacher" />
          <StatCard type="parent" />
          <StatCard type="admin" />
        </div>
        {/* middle chart */}

        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className=" w-full lg:w-2/5 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className=" w-full lg:w-3/5 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div></div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
