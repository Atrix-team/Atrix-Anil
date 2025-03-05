import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin-components/AdminNavbar"
import AdminSidebar from "../admin-components/AdminSidebar"

const AdminLayout = () => {
  return (
    <div>
      {/* <div>
        <AdminNavbar></AdminNavbar>
      </div>
      <div>
        <div className=" col-span-4">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-8">
          // <Outlet></Outlet>
        </div>
      </div> */}

      <div>
        <div className="col-12">
          <AdminNavbar></AdminNavbar>
        </div>
      </div>
      <div>
        <div className="col-4">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-8"></div>
      </div>

    </div>
  );
};

export default AdminLayout;
