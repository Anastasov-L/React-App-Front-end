import { HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import ReviewsGrid from './pages/ReviewsGrid'
import NoPage from './pages/NoPage'
import { AuthProvider } from './Context'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ReviewsList from './pages/ReviewsList'

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes> 
          <Route path="/" element={<Navigate to="/login" replace />} />  {/*when the root of the app is visited we go to login page*/}

          <Route path="/login" element={
            <PublicRoute>   {/* only login is public as it has to be accessible by everyone */}
              <LogIn />
            </PublicRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/reviewsGrid" element={
            <PrivateRoute>
              <ReviewsGrid />
            </PrivateRoute>
          } />
          <Route path="/reviewsList" element={
            <PrivateRoute>
              <ReviewsList />
            </PrivateRoute>
          } />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}