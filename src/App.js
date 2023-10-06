import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layouts/Header/Header';
import Course from './components/Course/Course';
import Footer from './components/Layouts/Footer/Footer';
import Login from './components/Authenticate/Login';
import Register from './components/Authenticate/Register';
import ForgetPassword from './components/Authenticate/ForgetPassword';
import Passwordreset from './components/Authenticate/Passwordreset';
import Contacts from './components/Contact/Contacts';
import Request from './components/Contact/Request';
import About from './components/Abouts/About';
import Subscribe from './components/Payments/Subscribe';
import PagenotFound from './components/Layouts/PageNotFound/PagenotFound';
import SuccessPayments from './components/Payments/SuccessPayments';
import FailedPayments from './components/Payments/FailedPayments';
import CoursesPage from './components/CoursePage/CoursesPage';
import Profile from './components/Profiles/Profile';
import UpdateProfile from './components/Profiles/UpdateProfile';
import Changepassword from './components/Profiles/Changepassword';
import Dashboard from './components/Admins/Dashboard/Dashboard';
import AdminCourses from './components/Admins/AdminCourses/AdminCourses';
import CreateCourse from './components/Admins/CreateCourse/CreateCourse';
import Users from './components/Admins/Users/Users';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CoursesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/fpassword" element={<ForgetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paysuccess" element={<SuccessPayments />} />
        <Route path="/payfailed" element={<FailedPayments />} />
        <Route path="/*" element={<PagenotFound />} />
        <Route path="/rpassword/:token" element={<Passwordreset />} />
        <Route path="/admins/dashboard" element={<Dashboard />} />
        <Route path="/admins/createcourse" element={<CreateCourse />} />
        <Route path="/admins/course" element={<AdminCourses />} />
        <Route path="/admins/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
