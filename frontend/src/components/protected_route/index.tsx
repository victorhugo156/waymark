import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import Spinner from "../spinner";

export function ProtectedRoute() {
    const { isAuthLoading, isAuthenticated } = useContext(AuthContext)
    const location = useLocation()
  
    if (isAuthLoading) {
      return <Spinner />
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/sign-in" replace state={{from: location}} />
    }
  
    return <Outlet />
  }