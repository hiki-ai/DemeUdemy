import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Button from './components/Button';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import InstructorDashboard from './pages/InstructorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CourseDetail from './pages/CourseDetail';
import MyLearning from './pages/MyLearning';
import Certificates from './pages/Certificates';
import Pricing from './pages/Pricing';
import BusinessLanding from './pages/BusinessLanding';
import InformationPage from './pages/InformationPage';
import VideoLearning from './pages/VideoLearning';

// Placeholder components for pages not yet fully implemented
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-center p-6">
    <div>
      <h1 className="text-9xl font-black text-primary/20">404</h1>
      <p className="text-2xl font-bold text-text mb-8">Page not found</p>
      <Link to="/"><Button>Back to Home</Button></Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="business" element={<BusinessLanding />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="category/:id" element={<LandingPage />} />
          <Route path="careers" element={<InformationPage title="Careers" />} />
          <Route path="blog" element={<InformationPage title="Blog" />} />
          <Route path="help" element={<InformationPage title="Help and Support" />} />
          <Route path="terms" element={<InformationPage title="Terms of Use" />} />
          <Route path="privacy" element={<InformationPage title="Privacy Policy" />} />
          <Route path="teach" element={<InformationPage title="Teach on UAcademy" />} />
        </Route>
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Learning Player (Fullscreen) */}
        <Route path="/learn/:courseId" element={<VideoLearning />} />
        
        <Route path="/my-learning" element={<Navigate to="/dashboard/MyLearning" replace />} />
        <Route path="/certificates" element={<Navigate to="/dashboard/certificates" replace />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/student" replace />} />
          <Route path="student" element={<StudentDashboard />} />
          <Route path="MyLearning" element={<MyLearning />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="instructor" element={<InstructorDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
