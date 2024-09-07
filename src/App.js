import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppProvider, { AppContext } from './context/Context';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/products"
            element={
                <ProductList />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart />

              // <ProtectedRoute>
              // </ProtectedRoute>
            }
          />
          {/* Catch-all route */}
          <Route path="*" element={<h1 className="text-center mt-5">404: Page Not Found</h1>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

// ProtectedRoute component to protect routes
const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(AppContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default App;
