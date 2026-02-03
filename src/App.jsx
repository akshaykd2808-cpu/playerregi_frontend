import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./roots/ProtectedRoute";
import ProtectedLayout from "./roots/ProtectedLayout";
import "./App.css";

function App() {
return (
     <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* add more protected pages here */}
          </Route>
        </Route>


      </Routes>
    </Router>
  );

}

export default App;
