import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      `Failed to get Events list from API with error message: ${error}`
    );
  }
};
const getEventsComments = async (id) => {
  try {
    const response = await axios.get(`${eventsEndpoint}/${id}/comments`);

    return response.data;
  } catch (error) {
    console.log(
      `Failed to get comments list from API with error message: ${error}`
    );
  }
};
const postNewComment = async (name, comment, id) => {
  try {
    const response = await axios.post(`${eventsEndpoint}/${id}/comments`, {
      name,
      comment,
    });

    return response.data;
  } catch (error) {
    console.log("Failed to post comments", error);
  }
};
const getSigleEvent = async (id) => {
  try {
    const response = await axios.get(`${eventsEndpoint}/${id}`);

    return response.data;
  } catch (error) {
    console.log(`Failed to get ${id} from API with error message: ${error}`);
  }
};
const postEvent = async (
  title,
  description,
  location,
  entrance,
  date,
  images,
  price
) => {
  try {
    const response = await axios.post(`${eventsEndpoint}`, {
      title,
      description,
      location,
      entrance,
      date,
      images,
      price,
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log("Failed to post new event", error);
  }
};
const getClasses = async () => {
  try {
    const response = await axios.get(`${classesEndpoint}`);
    return response.data;
  } catch (error) {
    console.log(
      `Failed to get Classes list from API with error message: ${error}`
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
const Register = async (userId, classId) => {
  try {
    const response = await axios.post(
      `${classesEndpoint}/${classId}/register`,
      {
        userId,
        classId,
      }
    );

    return response;
  } catch (error) {
    console.error("Error registering for class:", error);
  }
};
export {
  getEvents,
  getSigleEvent,
  getEventsComments,
  getClasses,
  getArticles_news,
  getSigleClass,
  postNewClass,
  getSigleArticleNews,
  postArticlesNews,
  postNewComment,
  postEvent,
  Register,
};
