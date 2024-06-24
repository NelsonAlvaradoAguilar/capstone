import "./App.scss";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { profileEndpoint } from "./Api-tools/Api-tools";
import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";

import HomePage from "./pages/HomePage/HomePage";
import ClassesPage from "./pages/ClassesPage/ClassesPage";
import ClassesDetails from "./components/ClassesDetails/ClassesDetails";
import PostNewClass from "./components/PostNewClass/PostNewClass";
import ArticlesNewsPage from "./pages/ArticlesNewsPage/ArticlesNewsPage";
import ArticlesNewsDetails from "./components/ArticlesNewsDetails/ArticlesNewsDetails";
import AddNewArticlesNews from "./components/AddNewArticlesNews/AddNewArticlesNews";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventsDetails from "./components/EventsDetails/EventsDetails";
import PostAComments from "./components/PostComments/PostComments";
import PostAnEvent from "./components/PostEvents/PostEvents";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisteringForAClass from "./components/ClassRegistration/ClassRegistration";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { getAthorized } from "./Api-tools/Api-tools";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [user_id, setUser_id] = useState();
  const getUserInfo = async () => {
    try {
      const resp = await getAthorized();
      setUserInfo(resp);
      setUser_id(resp.id);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  console.log(user_id);
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route
            path="/classes/:id"
            element={<ClassesDetails user_id={user_id} userInfo={userInfo} />}
          />
          <Route path="/PostNewClass" element={<PostNewClass />} />
          <Route path="/news" element={<ArticlesNewsPage />} />
          <Route path="/news/:id" element={<ArticlesNewsDetails />} />
          <Route path="/AddNewArticlesNews" element={<AddNewArticlesNews />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/PostAnEvent"
            element={<PostAnEvent user_id={user_id} />}
          />
          <Route
            path="/classes/:id/register"
            element={<RegisteringForAClass />}
          />
          <Route path="/events/:id" element={<EventsDetails />} />
          <Route path="/events/:id/comments" element={<PostAComments />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
