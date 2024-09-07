import React, { useState, useContext } from 'react';
import {
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBContainer
} from 'mdb-react-ui-kit';
import { AppContext } from '../context/Context';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/products');
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#508bfc' }}>
      <MDBCard className="p-4" style={{ maxWidth: '400px' }}>
        <MDBCardBody>
          <h2 className="mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Email address"
              type="email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              label="Password"
              type="password"
              className="mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="d-flex justify-content-between mb-4">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ms-2">Remember me</label>
              </div>
              <Link to="/signup">Sign Up</Link>
            </div>
            <MDBBtn type="submit" className="w-100 mb-4">Login</MDBBtn>
          </form>
          <hr className="my-4" />
          <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
            <i className="fab fa-google me-2"></i> Sign in with Google
          </MDBBtn>
          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
