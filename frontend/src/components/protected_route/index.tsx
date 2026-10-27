import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import Spinner from "../spinner";

export function ProtectedRoute() {
    const { isAuthLoading, isAuthenticated } = useContext(AuthContext)
  
    if (isAuthLoading) {
      return <Spinner />
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/sign-in" replace />
    }
  
    return <Outlet />
  }