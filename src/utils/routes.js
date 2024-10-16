import { HashRouter, Route, Routes } from "react-router-dom";

//imports from diffrent files
import HomeMainPage from "../Pages/HomePage/HomeMainPage";
import CourseTimeAnalyzerMainPage from "../Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzerMainPage";
import CreatorsMainPage from "../Pages/CreatorsPage/CreatorsMainPage";
import SourceDataMainPage from "../Pages/SourceDataPage/SourceDataMainPage";
import StudentEnrollmentAnalyzerMainPage from "../Pages/StudentEnrollmentAnalyzerPage/StudentEnrollmentAnalyzerMainPage";
import SupCourseAnalyzerMainPage from "../Pages/SupCourseAnalyzer/SupCourseAnalyzerMainPage";
import LoginMainPage from "../Pages/LoginPage/LoginMainPage";
import RegisterMainPage from "./Pages/RegistrationPage/register";
import About from "../Pages/About/AboutMain";
import { Search } from "../Pages/Search/search";
import CourseTimeAnalyzer from "../Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzer";

// route authentication
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "./AuthContext";

const RouteProvider = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/Register" element={<RegisterMainPage />} />
          <Route path="/Login" element={<LoginMainPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
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
            <Route path="/search" element={<Search />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>  
  );
};

export default RouteProvider;
