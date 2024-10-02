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

//route authentication
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
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
      </div>
    </AuthProvider>  
  );
}

export default App;
