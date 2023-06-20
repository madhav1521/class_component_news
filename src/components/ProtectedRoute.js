import { useState } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({
    user,
    redirectPath = '/',
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />
    }
  
    return children;
  };