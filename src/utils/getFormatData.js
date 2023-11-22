export const sliceTime = (time) => {
  const sliced = time.split("T")[1].split(":00+")[0];
  return sliced;
};

// const extractAllSessions = (data) => {
//   const sessions = data?.sessions;
//   const allSessions = [];

//   for (let i = 0; i < sessions?.length; i++) {
//     for (let k = 0; k < sessions[i]?.items?.length; k++) {
//       allSessions.push({
//         movie: sessions[i]?.movie?.name_rus,
//         poster: sessions[i]?.movie?.posters.p1200x1730,
//         session: sliceTime(sessions[i]?.items[k].session.session_date_tz),
//         hall: sessions[i]?.items[k].hall.name,
//         is_3d: sessions[i]?.items[k].session.is_3_d,
//         is_imax: sessions[i]?.items[k].hall.imax,
//         is_laser: sessions[i]?.items[k].hall.laser,
//       });
//     }
//   }
//   return allSessions;
// };

const extractFirstUniqueSession = (data) => {
  const sessions = data?.sessions;
  const uniqueSessions = [];

  for (let i = 0; i < sessions?.length; i++) {
    uniqueSessions.push({
      movie: sessions[i]?.movie?.name_rus,
      poster: sessions[i]?.movie?.posters.p1200x1730,
      session: sliceTime(sessions[i]?.items[0].session.session_date_tz),
      hall: sessions[i]?.items[0].hall.name,
      is_3d: sessions[i]?.items[0].session.is_3_d,
      is_imax: sessions[i]?.items[0].hall.imax,
      is_laser: sessions[i]?.items[0].hall.laser,
    });
  }

  return uniqueSessions;
};

export const sortByTime = (data) => {
  const nextDaySessions = data.filter((el) => el.substring(0, 2) === "00");
  const todaySessions = data.filter((el) => el.substring(0, 2) !== "00");

  nextDaySessions.sort((a, b) => a.localeCompare(b));
  todaySessions.sort((a, b) => a.localeCompare(b));

  const sortedSessions = todaySessions.concat(nextDaySessions);
  return sortedSessions;
};

const getFormatData = (data) => {
  const firstUniqueSession = extractFirstUniqueSession(data);
  // const extractedAllSessions = extractAllSessions(data);
  const sortedData = sortByTime(firstUniqueSession);

  return sortedData.slice(0, 11);
};

export default getFormatData;
