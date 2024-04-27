import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/Login";
import HomePage from "./pages/HomePage/HomePage";
import ClassesPage from "./pages/ClassesPage/ClassesPage";
import ClassesDetails from "./components/ClassesDetails/ClassesDetails";
import AddNewClass from "./components/AddNewClass/AddNewClass";
import ArticlesNewsPage from "./pages/ArticlesNewsPage/ArticlesNewsPage";
import ArticlesNewsDetails from "./components/ArticlesNewsDetails/ArticlesNewsDetails";
import AddNewArticlesNews from "./components/AddNewArticlesNews/AddNewArticlesNews";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventsDetails from "./components/EventsDetails/EventsDetails";
import PostAComments from "./components/PostComments/PostComments";
import PostAnEvent from "./components/PostEvents/PostEvents";
//import SingleClass from "./components/SingleClass/ClassesDeatail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:id" element={<ClassesDetails />} />
          <Route path="/AddNewClass" element={<AddNewClass />} />
          <Route path="/news" element={<ArticlesNewsPage />} />
          <Route path="/news/:id" element={<ArticlesNewsDetails />} />
          <Route path="/AddNewArticlesNews" element={<AddNewArticlesNews />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/PostAnEvent" element={<PostAnEvent />} />
          <Route path="/events/:id" element={<EventsDetails />} />
          <Route path="/events/:id/comments" element={<PostAComments />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
//
