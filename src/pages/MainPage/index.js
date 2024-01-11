import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
// import LeftTable from "../../components/LeftTable";
import { getData } from "../../services";
import Spinner from "../../components/Spinner";

import "../../styles/main-page.css";

const MainPage = () => {
  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getData();
      setTimetable(data?.data);
      setLoading(false);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 300000);

    fetchData();

    return () => {
      clearInterval(interval);
    };

  }, []);

  setReloadTimer();

  function setReloadTimer() {
    const now = new Date();
    const reloadTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0); 
  
    if (now > reloadTime) {
      reloadTime.setDate(reloadTime.getDate() + 1);
    }
  
    const timeUntilReload = reloadTime - now;

    setTimeout(reloadPage, timeUntilReload);
  }

  function reloadPage() {
    window.location.reload(true);
  }

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="page__wrapper">
        {/* <LeftTable timetable={timetable} /> */}
        <Cards timetable={timetable} />
      </div>
    </div>
  );
};

export default MainPage;
