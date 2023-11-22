import { sliceTime, sortByTime } from "./getFormatData";

export default function combineSeances(data) {
  const sessions = [];
  if (data["Standart"]) {
    for (let i = 0; i < data["Standart"].seances.length; i++) {
      sessions.push(data["Standart"].seances[i].timeframe.start);
    }
  }

  if (data["Dolby Atmos"]) {
    for (let i = 0; i < data["Dolby Atmos"].seances.length; i++) {
      sessions.push(data["Dolby Atmos"].seances[i].timeframe.start);
    }
  }

  if (data["First Class"]) {
    for (let i = 0; i < data["First Class"].seances.length; i++) {
      sessions.push(data["First Class"].seances[i].timeframe.start);
    }
  }

  if (data["IMAX"]) {
    for (let i = 0; i < data["IMAX"].seances.length; i++) {
      sessions.push(data["IMAX"].seances[i].timeframe.start);
    }
  }

  if (data["Comfort"]) {
    for (let i = 0; i < data["Comfort"].seances.length; i++) {
      sessions.push(data["Comfort"].seances[i].timeframe.start);
    }
  }

  const sliced = sessions.map((session) => sliceTime(session));

  const upcoming = sliced.filter((session) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (session.slice(0, 2) === "00") return session;
    if (hours < parseInt(session.slice(0, 2))) {
      return session;
    } else if (hours === parseInt(session.slice(0, 2))) {
      if (minutes <= parseInt(session.slice(3))) {
        return session;
      }
    }
    return null;
  });

  console.log(upcoming)

  return sortByTime(upcoming);
}
