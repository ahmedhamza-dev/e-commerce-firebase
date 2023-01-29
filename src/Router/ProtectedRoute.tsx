import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const ProtectedRoute = ({children}: any) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth();
  return currentUser ? children : navigate('/login')
}

export default ProtectedRoute