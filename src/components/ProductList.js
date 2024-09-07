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

const ProductList = () => {
  const { products, addToCart, user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand as={Link} to="/">E-Shop</MDBNavbarBrand>
          <MDBNavbarNav className='ml-auto mb-2 mb-lg-0'>
            {user ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to="/cart">
                    <MDBIcon fas icon="shopping-cart" /> Cart
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
        <h2 className="text-center mb-4">Product Listing</h2>
        <MDBRow>
          {products.length === 0 ? (
            <p className="text-center">Loading products...</p>
          ) : (
            products.map(product => (
              <MDBCol md='4' className="mb-4" key={product.id}>
                <MDBCard style={{ height: '100%' }}>
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <MDBCardBody className="d-flex flex-column">
                    <MDBCardTitle>{product.name}</MDBCardTitle>
                    <MDBCardText>{product.description}</MDBCardText>
                    <MDBCardText><strong>${product.price}</strong></MDBCardText>
                    <MDBBtn
                      className="mt-auto"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ProductList;
