import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Banner from "./ProjectWideReusables/Banner/banner";

//imports from diffrent files
import HomeMainPage from "./Pages/HomePage/HomeMainPage";
import CourseTimeAnalyzer from "./Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzer";
import CreatorsMainPage from "./Pages/CreatorsPage/CreatorsMainPage";
import SourceDataMainPage from "./Pages/SourceDataPage/SourceDataMainPage";
import StudentEnrollmentAnalyzerMainPage from "./Pages/StudentEnrollmentAnalyzerPage/StudentEnrollmentAnalyzerMainPage";
import SupCourseAnalyzerMainPage from "./Pages/SupCourseAnalyzer/SupCourseAnalyzerMainPage";
import LoginMainPage from "./Pages/LoginPage/LoginMainPage";
import About from "./Pages/About/About";
// import RegisterMainPage from "./Pages/RegistrationPage/RegisterMainPage";
import RegisterMainPage from "./Pages/RegistrationPage/register";
import { Search } from "./Pages/Search/search";
import app from "./utils/firebase";
//import authentication
import Login from './Pages/Authentication/Loginauth';
import Logout from './Pages/Authentication/Logoutauth';
import ProtectedRoute from './Pages/Authentication/ProtectedRoute';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/CourseTimeAnalyzer" element={<CourseTimeAnalyzer />} />
          <Route path="/Creators" element={<CreatorsMainPage />} />
          <Route path="/SourceData" element={<SourceDataMainPage />} />
          <Route
            path="/StudentEnrollmentAnalyzer"
            element={<StudentEnrollmentAnalyzerMainPage />}
          />
          <Route
            path="/SupCourseAnalyzer"
            element={<SupCourseAnalyzerMainPage />}
          />
          <Route path="/search" element={<Search />}/>
          <Route path="/Login" element={<LoginMainPage />}component={Login} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<RegisterMainPage />} />
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
