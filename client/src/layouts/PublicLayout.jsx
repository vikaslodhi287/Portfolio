import { Outlet } from 'react-router-dom';
import Navbar from '/src/components/layout/Navbar.jsx';

const PublicLayout = () => {
  return (
    <div className="public-app-container">
      <Navbar />
      <main className="public-viewport-content">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;