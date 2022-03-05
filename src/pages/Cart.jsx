import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom = styled.div`

`;

const Cart = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <Title>Your Bag</Title>
              <Top>
                  <TopButtom>Continue Shopping</TopButtom>
                  <TopButtom>Checkout Now</TopButtom>
              </Top>
              <Bottom></Bottom>
          </Wrapper>
          <Footer/>
      </Container>
  );
};

export default Cart;