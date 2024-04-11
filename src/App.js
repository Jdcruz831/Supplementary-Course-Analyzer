import './App.css';
import { ThemeProvider } from '@emotion/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Banner from './ProjectWideReusables/Banner/banner';

//imports from diffrent files
import HomeMainPage from './Pages/HomePage/HomeMainPage' 
import CourseTimeAnalyzerMainPage from './Pages/CourseTimeAnalyzerPage/CourseTimeAnalyzerMainPage' 
import CreatorsMainPage from './Pages/CreatorsPage/CreatorsMainPage' 
import SourceDataMainPage from './Pages/SourceDataPage/SourceDataMainPage' 
import StudentEnrolmentAnalyzerMainPage from './Pages/StudentEnrolmentAnalyzerPage/StudentEnrolmentAnalyzerMainPage' 
import SupCourseAnalyzerMainPage from './Pages/SupCourseAnalyzer/SupCourseAnalyzerMainPage' 
import LoginMainPage from './Pages/LoginPage/LoginMainPage';
import AboutMainPage from './Pages/AboutPage/AboutMainPage';
import RegisterMainPage from './Pages/RegistrationPage/RegisterMainPage';

function App() {
  return (
     <div>
      
      <HashRouter>
      <Routes>
        <Route path="/" element={<HomeMainPage />} />
        <Route path="/CourseTimeAnalyzer" element={<CourseTimeAnalyzerMainPage />} />
        <Route path="/Creators" element={<CreatorsMainPage />} />
        <Route path="/SourceData" element={<SourceDataMainPage />} />
        <Route path="/StudentEnrolmentAnalyzer" element={<StudentEnrolmentAnalyzerMainPage />} />
        <Route path="/SupCourseAnalyzer" element={<SupCourseAnalyzerMainPage />} />
        <Route path="/Login" element={<LoginMainPage />} />
        <Route path="/About" element={<AboutMainPage />} />
        <Route path="/Register" element={<RegisterMainPage />} />

      </Routes>
    </HashRouter>

    </div>
  );
}

export default App;
