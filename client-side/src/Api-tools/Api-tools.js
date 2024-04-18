import axios from "axios";
const apiUrl = "http://localhost:8080";
const apiEndpoint = "/api/capstone/";
const eventsEndpoint = `${apiUrl}${apiEndpoint}events`;
const classesEndpoint = `${apiUrl}${apiEndpoint}classes`;
const donationsAndNewEndpoint = `${apiUrl}${apiEndpoint}news`;

const getEvents = async () => {
  try {
    const response = await axios.get(`${eventsEndpoint}`);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get Events List from API with error message: ${error}`
    );
  }
};
const getClasses = async () => {
  try {
    const response = await axios.get(`${classesEndpoint}`);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get Classes List from API with error message: ${error}`
    );
  }
};

const getSigleClass = async (classId) => {
  try {
    const response = await axios.get(`${classesEndpoint}/${classId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get ${classId} from API with error message: ${error}`
    );
  }
};
const getDonationsAndNews = async () => {
  try {
    const response = await axios.get(`${donationsAndNewEndpoint}`);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get Donations and New List from API with error message: ${error}`
    );
  }
};

export { getEvents, getClasses, getDonationsAndNews, getSigleClass };
