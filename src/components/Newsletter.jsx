import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height : 60vh;
  background-color: #FFCCFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-botton: 20px;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-botton: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #A3C4F3;
  color: #ffffff;
`;

const Newsletter = () => {
    return ( 
      <Container>
        <Title>Somos Camila's Store</Title> 
        <Desc>
          Tu Tienda Digital, "Tu LOOK, Nuestro Outfit", Calzado Deportivos.
        </Desc>
        <Desc>
          *Precio 💸 *Top Quality 👑 *Alta Calidad 👟
        </Desc>
        <InputContainer >
          <Input placeholder="Your email"/>
          <Button>
            <Send/>
          </Button>
        </InputContainer> 
      </Container>
    );
};

export default Newsletter;