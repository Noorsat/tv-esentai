import { sliceTime, sortByTime } from "./getFormatData";
import moment from "moment";

export default function combineSeances(data) {
  const sessions = [];
  console.log(data);
  if (data["Standard"]) {
    for (let i = 0; i < data["Standard"].seances.length; i++) {
      sessions.push(data["Standard"].seances[i].timeframe.start);
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

  const upcoming = sessions.filter((session) => moment(session).isAfter(moment())).map((session) => moment(session).format("HH:mm"));

  return sortByTime(upcoming);
}
