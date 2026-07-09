import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      {/* Admin Navbar */}

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;