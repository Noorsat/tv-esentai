import moment from "moment";

const response = await fetch('https://worldtimeapi.org/api/ip');
const data = await response.json();

const date = moment(data.datetime).format("YYYY-MM-DDTHH:mm:ss")
    
export default date;
