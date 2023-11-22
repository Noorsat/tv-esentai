import "../../styles/left-table.css";
import { getFormatData } from "../../utils";

function LeftTable({ timetable: { result } }) {
  const formatData = getFormatData(result);

  const renderNearestSessions = () => {
    return formatData.map((session, i) => {
      return (
        <div className="card-session" key={i}>
          <div className="session-info">
            <div className="image-block">
              <img src={session.poster} alt="Movie Poster" />
            </div>
            <div className="text-block">
              <span className="movie">{session.movie}</span>
            </div>
          </div>
          <div className="session-time">
            <span className="movie"> {session.session}</span>
            <span className="hall">
              {session.is_3d
                ? session.is_imax
                  ? "3D IMAX"
                  : "3D Laser"
                : session.is_imax
                ? "IMAX"
                : "Laser"}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="left-table">
      <div className="sessions">{renderNearestSessions()}</div>
    </div>
  );
}

export default LeftTable;
