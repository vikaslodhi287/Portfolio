import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '/src/layouts/PublicLayout.jsx';
import AdminLayout from '/src/layouts/AdminLayout.jsx';
import Home from '/src/pages/public/Home.jsx'; // Imported the live landing page engine

const MockLogin = () => <div style={{ padding: '8rem 4rem', textAlign: 'center' }}><h1>Secure Administrative Access Portal</h1></div>;
const MockDash = () => <div style={{ padding: '8rem 4rem', textAlign: 'center' }}><h1>Secure CMS Workspace</h1></div>;
const Mock404 = () => <div style={{ padding: '8rem 4rem', textAlign: 'center' }}><h1>404 | Resource Not Found</h1></div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Changed from element={<MockHome />} to the live engine component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<MockLogin />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<MockDash />} />
      </Route>

      <Route path="/404" element={<Mock404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;