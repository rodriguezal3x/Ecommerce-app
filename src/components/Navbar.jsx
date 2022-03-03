import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

// Style Navbar
const Container = styled.div`
    height: 60px;
    // background-color: #457B9D;
`
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left =styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    box-shadow: 1px 1px 20px 4px rgba(148,147,147,0.5);
    border-radius: 5px;
`
const Input = styled.input`
    border:none;
`

const Center =styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 40px;
    font-family: 'Vujahday Script', cursive;
`
const Right =styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>Es</Language>
                    <SearchContainer>
                        <Input/>
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
