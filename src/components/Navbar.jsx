import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

// Style Navbar
const Container = styled.div`
    height: 60px;
    ${mobile({ height:"50px"})}
`;

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding:"10px 0px"})}
`;

const Left =styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    box-shadow: 1px 1px 20px 4px rgba(148,147,147,0.5);
    border-radius: 5px;
    ${mobile({ marginLeft: "10px"})}
`;

const Input = styled.input`
    border:none;
    ${mobile({ width: "70px"})}
`;

const Center =styled.div`
    flex:1;
    text-align: center;
    ${mobile({ flex: "1.5"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    font-family: 'Vujahday Script', cursive;
    ${mobile({ fontSize: "16px"})}
`; 

const Right =styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2",
     justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px",
     marginLeft: "7px"})}
`;

const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>Es</Language>
                    <SearchContainer>
                        <Input placeholder='Buscar'/>
                        <Search style={{color:"gray", fontsize: 16,}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Camila's Store</Logo>
                </Center>
                <Right>
                    <MenuItem>Registro</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right> 
            </Wrapper>  
        </Container>
    )
}

export default Navbar
