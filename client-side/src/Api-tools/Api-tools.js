import axios from "axios";
export const apiUrl = "http://localhost:8080";
const apiEndpoint = "/api/capstone/";
const eventsEndpoint = `${apiUrl}${apiEndpoint}events`;
const classesEndpoint = `${apiUrl}${apiEndpoint}classes`;
const articles_newsEndpoint = `${apiUrl}${apiEndpoint}news`;

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

const getSigleClass = async (classesId) => {
  try {
    const response = await axios.get(`${classesEndpoint}/${classesId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get ${classesId} from API with error message: ${error}`
    );
  }
};
const postNewClass = async (
  title,
  description,
  location,
  instructor,
  date,
  images
) => {
  try {
    const response = await axios.post(`${classesEndpoint}`, {
      title,
      description,
      location,
      instructor,
      date,
      images,
    });

    return response.data;
  } catch (error) {
    console.log("this is the error", error);
  }
};
const getArticles_news = async () => {
  try {
    const response = await axios.get(`${articles_newsEndpoint}`);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get Donations and New List from API with error message: ${error}`
    );
  }
};
const getSigleArticleNews = async (id) => {
  try {
    const response = await axios.get(`${articles_newsEndpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Failed to get ${id} from API with error message: ${error}`);
  }
};
const postArticlesNews = async (
  title,
  description,
  location,
  contact_name,
  email,
  phone,
  images
) => {
  try {
    const response = await axios.post(`${articles_newsEndpoint}`, {
      title,
      description,
      location,
      contact_name,
      email,
      phone,
      images,
    });

    return response.data;
  } catch (error) {
    console.log("this is the error", error);
  }
};
export {
  getEvents,
  getClasses,
  getArticles_news,
  getSigleClass,
  postNewClass,
  getSigleArticleNews,
  postArticlesNews,
};
