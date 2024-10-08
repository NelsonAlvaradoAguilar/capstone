import axios from "axios";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export const apiUrl = "http://localhost:8080",
  apiEndpoint = "/api/capstone/";

const eventsEndpoint = `${apiUrl}${apiEndpoint}events`;
const classesEndpoint = `${apiUrl}${apiEndpoint}classes`;
const articles_newsEndpoint = `${apiUrl}${apiEndpoint}news`;
const signupEndpoint = `${apiUrl}${apiEndpoint}signup`;
export const loginEndpoint = `${apiUrl}${apiEndpoint}login`;
export const profileEndpoint = `${apiUrl}${apiEndpoint}profile`;
export const token = sessionStorage.getItem("JWTtoken");
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
const fetchEventsByUserId = async (user_id) => {
  try {
    const response = await axios.get(`${eventsEndpoint}/user/${user_id}`);

    console.log("Events:", response.data);
    // const data = JSON.stringify(response);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
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
const postEvent = async (formDat, user_id) => {
  try {
    const response = await axios.post(
      `${eventsEndpoint}/${user_id}`,
      formDat,
      user_id
    );
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

    return response.data;
  } catch (error) {
    console.log(
      `Failed to get ${classesId} from API with error message: ${error}`
    );
  }
};
const postNewClass = async (formData, user_id) => {
  try {
    const response = await axios.post(
      `${classesEndpoint}/${user_id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error posting new class:", error);
    throw error; // Rethrow the error so the calling function can handle it
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
const postArticlesNews = async (formData, user_id) => {
  try {
    const response = await axios.post(
      `${articles_newsEndpoint}/${user_id}`,
      formData
    );

    return response.data;
  } catch (error) {
    console.log("this is the error", error);
  }
};
const Register = async (class_id, user_id) => {
  try {
    const response = await axios.post(
      `${classesEndpoint}/${class_id}/register`,
      {
        class_id: class_id,
        user_id: user_id,
      }
    );

    return response;
  } catch (error) {
    console.error("Failed registering for class:", error);
  }
};
const feedBack = async (class_id, user_id, comment) => {
  try {
    const response = await axios.post(
      `${classesEndpoint}/${class_id}/register`,
      {
        class_id: class_id,
        user_id: user_id,
        comment: comment,
      }
    );

    return response;
  } catch (error) {
    console.error("Failed registering for class:", error);
  }
};
const signup = async (formData) => {
  try {
    const resp = await axios.post(`${signupEndpoint}`, formData);
    return resp.data;
  } catch (error) {
    console.log("Error signing up:", error);
  }
};

const getAthorized = async () => {
  if (!token) {
    return "No JWTtoken found in sessionStorage";
  }

  try {
    const response = await axios.get(profileEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const logOut = async (token) => {
  const response = await axios.post(`${profileEndpoint}/logout`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  sessionStorage.removeItem("JWTtoken");
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
  signup,
  getAthorized,
  feedBack,
  logOut,
  fetchEventsByUserId,
};
