import React, { useContext } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBIcon
} from 'mdb-react-ui-kit';
import { AppContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand as={Link} to="/">E-Shop</MDBNavbarBrand>
          <MDBNavbarNav className='ml-auto mb-2 mb-lg-0'>
            {user ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to="/products">
                    <MDBIcon fas icon="home" /> Products
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to="/cart">
                    <MDBIcon fas icon="shopping-cart" /> Cart ({cart.length})
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#" onClick={handleLogout}>
                    Logout
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to="/login">Login</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to="/signup">Sign Up</MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer className="my-5">
        <h2 className="text-center mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <MDBRow>
              {cart.map(item => (
                <MDBCol md='6' className="mb-4" key={item.id}>
                  <MDBCard>
                    <MDBCardBody className="d-flex justify-content-between align-items-center">
                      <div>
                        <MDBCardTitle>{item.name}</MDBCardTitle>
                        <MDBCardText>Price: ${item.price}</MDBCardText>
                        <MDBCardText>Quantity: {item.quantity}</MDBCardText>
                      </div>
                      <MDBBtn color='danger' onClick={() => removeFromCart(item.id)}>Remove</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
            <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>
          </>
        )}
      </MDBContainer>
    </>
  );
};

export default Cart;
