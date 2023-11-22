const Card = ({ title, times, image }) => {
  const renderTimes = times.slice(0, 12).map((seance, i) => {
    return (
      <div key={i} className="card__time">
        {seance}
      </div>
    );
  });
  return (
    <div className={"card"}>
      <div className="card__pic">
        <img src={image} alt="card" />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__times">{renderTimes}</div>
    </div>
  );
};

export default Card;
