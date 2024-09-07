import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // For managing logged-in user
  const [products, setProducts] = useState([]); // For managing product listing
  const [cart, setCart] = useState([]); // For managing cart items
  const [loading, setLoading] = useState(true); // For managing loading state
  const [error, setError] = useState(null); // For managing error state

  // Fetch products (can be replaced with API call)
  useEffect(() => {
    fetch('/data/ProductData.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched products:', data); // Debug line
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Function to handle login
  const login = (email, password) => {
    // Simulate authentication (replace with API call)
    if (email === "user@example.com" && password === "password") {
      setUser({ email });
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to handle signup
  const signup = (email, password) => {
    // Simulate signup logic (replace with actual API call)
    setUser({ email });
  };

  // Function to add product to cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product); // Debugging line
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity ? item.quantity + 1 : 2 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <AppContext.Provider value={{ user, login, signup, products, addToCart, cart, removeFromCart, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
