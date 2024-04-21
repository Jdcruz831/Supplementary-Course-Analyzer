import { HashRouter, Route, Routes } from "react-router-dom";

//imports from diffrent files
import HomeMainPage from "../Pages/HomePage/HomeMainPage";
import CourseTimeAnalyzerMainPage from "../Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzerMainPage";
import CreatorsMainPage from "../Pages/CreatorsPage/CreatorsMainPage";
import SourceDataMainPage from "../Pages/SourceDataPage/SourceDataMainPage";
import StudentEnrollmentAnalyzerMainPage from "../Pages/StudentEnrollmentAnalyzerPage/StudentEnrollmentAnalyzerMainPage";
import SupCourseAnalyzerMainPage from "../Pages/SupCourseAnalyzer/SupCourseAnalyzerMainPage";
import LoginMainPage from "../Pages/LoginPage/LoginMainPage";
import AboutMainPage from "../Pages/AboutPage/AboutMainPage";

const RouteProvider = () => {
  return (
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
        <Route path="/Login" element={<LoginMainPage />} />
        <Route path="/About" element={<AboutMainPage />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteProvider;
