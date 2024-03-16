import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DashSideBar, DashProfile } from "../components/index";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-56">
          <DashSideBar />
        </div>
        <div>
          {/* Profile */}
          {tab === "profile" && <DashProfile />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
