import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Assessment from "./pages/Assessment";
import Appointment from "./pages/Appointment";
import BookingSchedule from "./pages/BookingSchedule";
import MoodTracking from "./pages/MoodTracking";
import Resources from "./pages/Resources";
import ResourceDetails from "./pages/ResourceDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Application */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/booking-schedule" element={<BookingSchedule />} />
        <Route path="/mood" element={<MoodTracking />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
