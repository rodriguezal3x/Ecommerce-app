import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement  from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px",
     flexDirection: "column" })}; 
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})};
`;

const Title = styled.h1`
    font-weight: 200;
`;
const SubTitle = styled.span`
    margin: 20px 0px;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
// Filter Option
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`;

const FilterSizeOption = styled.option`
`;
const AddContainer = styled.div`
    width : 50%;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    ${mobile({width: "100%"})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px; 
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: #ffffff;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal;
        border: 1px solid Black;

    }
`;


const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Air Nike Jordan</Title>
                <SubTitle>Black Gold</SubTitle>
                <Desc>
                Volvamos a los días universitarios de MJ. Como estudiante atleta en Chapel Hill, Michael no solo protagonizó la cancha, sino que también se unió a una de las fraternidades afroamericanas más históricas. Ahora, la vitalidad de ese vínculo de toda la vida irradia a través de este último Air Jordan 1. Celebrando el tiempo de MJ con sus hermanos de la fraternidad, una parte superior de University Gold y Light Bordeaux cubre el estilo para una combinación de colores AJ1 completamente nueva                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Lo Quiero</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default Product;