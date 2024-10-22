import { BASE_URL, cinemaId, cityId, token } from "../constants";
import { date } from "../utils";

export const getData = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/schedule/hall_format?city=${cityId}&start=${moment().format("YYYY-MM-DDTHH:mm:ss")}&object=${cinemaId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return;
  }
};
