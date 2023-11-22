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
