import { Navigate } from "react-router-dom";
import { getUserRole } from "../util/auth";
import React from "react";
import type { JSX } from "react";

function AdminRoute({ children }: { children: React.ReactNode }): JSX.Element {
  const token = localStorage.getItem("token");
  let role = getUserRole();


  if (role) {
    role = role.toUpperCase();
  }

  if (!token) return <Navigate to="/login" />;

  if (role !== "ADMIN") {
    return <Navigate to="/403" />;
  }

  return <>{children}</>;
}

export default AdminRoute;
