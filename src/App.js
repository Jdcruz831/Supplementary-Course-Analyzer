import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Banner from "./ProjectWideReusables/Banner/banner";

//imports from diffrent files
import HomeMainPage from "./Pages/HomePage/HomeMainPage";
import CourseTimeAnalyzerMainPage from "./Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzerMainPage";
import CreatorsMainPage from "./Pages/CreatorsPage/CreatorsMainPage";
import SourceDataMainPage from "./Pages/SourceDataPage/SourceDataMainPage";
import StudentEnrollmentAnalyzerMainPage from "./Pages/StudentEnrollmentAnalyzerPage/StudentEnrollmentAnalyzerMainPage";
import SupCourseAnalyzerMainPage from "./Pages/SupCourseAnalyzer/SupCourseAnalyzerMainPage";
import LoginMainPage from "./Pages/LoginPage/LoginMainPage";
import About from "./Pages/About/About";
import RegisterMainPage from "./Pages/RegistrationPage/RegisterMainPage";
import { Search } from "./Pages/Search/search";
import AdminLogin from "./Pages/AdminLogin/AdminLoginPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route
            path="/CourseTimeAnalyzer"
            element={<CourseTimeAnalyzerMainPage />}
          />
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
          <Route path="/search" element={<Search />} />
          <Route path="/Login" element={<LoginMainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<RegisterMainPage />} />
          <Route path="AdminLogin" element={<AdminLogin/>}/>
         </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
