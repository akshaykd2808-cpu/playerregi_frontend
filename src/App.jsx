import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./roots/ProtectedRoute";
import ProtectedLayout from "./roots/ProtectedLayout";
import AddForm from "./pages/forms/AddForm";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AddCustomFields from "./pages/forms/AddCustomFields";

function App() {
return (
  
     <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
         
        <Route path="/login" element={<Login />} />

        
        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addform" element={<AddForm />} />
            <Route path="/addcustomfields" element={<AddCustomFields />} />
            {/* add more protected pages here */}
          </Route>
        </Route>


      </Routes>
    </Router>
  );

}

export default App;
