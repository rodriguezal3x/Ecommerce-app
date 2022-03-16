import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none"})};
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color}
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 24px;
`;

const SummaryItemText = styled.span`
    font-size: 14px;
`;

const SummaryItemPrice = styled.span`
    font-size: 14px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type ==="total" && "500"};
    font-size: ${props=>props.type ==="total" && "20px"};
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
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
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButtom type='filled'>Checkout Now</TopButtom>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='data:image/jpeg;base64,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' />
                                <Details>
                                    <ProductName><b>Product: </b>Vans Old Skool</ProductName>
                                    <ProductId><b>ID: </b>CS506-P01-VC-01</ProductId>
                                    <ProductColor color='Black'/>
                                    <ProductSize><b>Size: </b> 39 EU</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVExUVEhUVFxcXFRcXFRUVGBIXGBUSFRUZHSggGBolGxYVITEhJSktLi4uFx8zODMtNygtLisBCgoKDQ0ODg0NDysZFRk3KysrLTQrKy4rNysrKysrNystLisrLSsrKysrKysrKysrNy0rKysrKysrKysrKysrK//AABEIAKwBJAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EAEYQAAEDAgIFCAgCCAMJAAAAAAEAAhEDIQQxEkFRYXEFIoGRobHB8AYTMkJSktHhFGJDU1RygsLS8RYjRBUXM1Vjg4STsv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiEoMEoHBaz3yVguiwz7htVg20WmKjhw3rZpVJUE0REBEVVZ+oIJ+sG1ZBWoqmVSbgwPdG38x8B5Fg6KLSbiyPaHnittjwRIUEkREBERAREQEREBERAREQEREBERAREQEREBERARFTicRoAWLicgB2k6ggse8C5Wm/FB1hJ2xPbC18RWgy8WOwF4H7w1KbcOx4mmQCDMtt0EDUqizSawFxBA15kDomyoOMpusHxOtpz3SsvdUYYe31jTbSA7HN8jgsihSqNl1LRubObous4iYzgxI3EKiVBoOl6t5lroIJc5swDHO3OFwUp1CHZQRm3xG0Hao6fuUgIFpHst3bzuVgpiI156XvTt+yDoIqaNabGx794Ua1YFtjY6xHYsqlXxIbn2XVUtcNIAGfeH1CgKxbYtIGp2rgbyOKiaPO0qZDXHPPRdv0ciVUYxT6YGi92jpbTE7pKyXNNmVA06yQCY3ago4zGta0+tZcAujR0muge6Yuc7ZqD6dNwE0mXAMFjZE6iNqoiwte0llV5hzmnTALSWmCCIFrZgq3k6qdIsNjFxfocHaxv67rncocrNp8wDSfqY33f3iLN4Z8FDAOqT6xzpqTIHuhuukBqB25zCD0yw50KNOoHAOGRErSx+IgLKtk4lPXrzQxp0l2g7mTulVHRY6RKytHkd0076nH6+K3lFEREBERAREQEREBERAREQEREBYc4ASbBQqV2ixInZrWuXl9pcOEDsMlBZUxHwtJ871XTIdO0Z3MjoWea2AdwnX0+day/DBxmS1wyI7iNYsqiuNA3FpjSjXq0uO1HYGm52kJa7WWmCeOoq5tPRYRUcHZzaBBNhEnVAVNKnBJp09GQAXOnIEwIJkxJ2Z5qjYyAa25AAudQtLif7qivQ0pD3asm26zntyhWl0CB0nxKpOdkFdJ0cz4crRI1GBb7yphsrLKUmTmN/YYR4ey7Q0g5jJ3EOOfBBgV2ggOME5Eix3AnWpV6PvAkFuWsX2jsVukHt2jK/iqKuHqAt9W5saQnSn2Z5wEZ2mAgtZVGRtx2bQqncnMJa4Pe0NcHQ13NMGYMiYOsAqXKAYW88xF5mNHfOQ6bLl0MYAwUqBdViee4ktEkkufU13J5rdwsEHSxWNg6LWl7onREWHxOJMNGeZvFpXIx4ruB57aW5sud89o6B0q4VNAaIlziZc45uPxO8BqEalqF5JMmf7lBq4Si1ggNAOvedsrYbVgquoLz0LMIO1hMTItrzGw/EPHrXN5SrumDbzmNoVdF5aZC6VLFtdY807wHNnaQfBBxcLQdUdotE7dg3kr0GKgAU25wB0DMlYdWMf8VjR+VhnvstR9PRdpMcSYhwdfS2GfdIvkOKDpcl2Dhsd4fZby5nJNWXOFwYBv39q6ayoiIgIiICIiAiIgIiICLEoTlv+iDD3gAkmALleT5Q9LqlxSwWKc240zSLZ3tB1byvUPpEyfWPbc/BAG6x7VW01PdLajSAQTDZn8zZm1/ZhWDh+jmKFQSXObn/AJbqZpun4tIgFx613xhwbzBGR18DuVZxBJLTSJIAJAdTMAzBguBAkG8alFpcHQGhhf8AG8uPNzhgJAz2hEbLKZhweQ4E25sc2BzTJM3nrWtp02Os4kgEaIcXZkX0RJ1d6VKEEF5LwTEH2WnVzRYibXnMLaaABYAcLKiumZ5xEbAdW871l7kcFBxdqY47xA7z25IObjOWsPSkPr0w4GC3TEg7HCeb0qvB8q6d2MNQHLReD1AAdpVtTkzCnS9ZQcJPOJLnCYm7mOIbY64VGE9GaDXeswtV1PaGODmO/eBz61B06lHJwljuv+EiYKw01rB1IHnAEhzdHRJu697ZxCm81WQToESNIklkCbugzqnWsVcYXD/Kaam8QGfObHongqLsTSkWdonbqPEa1o08QaNJoq1A8gRpkaOkZMBrQTOyBJsjKD33fULb+zT5sbi8y6eBAUmYCm0yG874iS53zOkoIU6U8+oJdmGm4Z4aW09Aslep58FmoYsteq+IO8dtu+EEdBa1Vt1uOVLwg1HhQa4a81c6l5uO4qp2CYbljTG0aUHbdBk4lgsXCdguegC6k2o4+yyN77dTcz0wradMNGoDdbuVml0d/UgiynFyZO3+kau/epNKrJlWtCDc5JHPP7viF1lyOT7PHA9y66mqIiKAiIgIiICqq1w21ydgVhMXK81RxBcS+faJPRqHUg734jo6FlrxrPWudSqHatllU7VUbkifay1Wg8ViwaQzRFjHwg7wNUqltVTDxsCosBEzN4j2jHyzHTmsPrXAtowZOlcG0QIvN7yIjWoyNgS2wIM03hoA0i6ABJuTGskDNRFS5OkSDECBDYziBN95KPcBqCNrjVboQWQTaOtTbTVYr7wp+t3dqCTSLFtwdYII4/2WQ3ovNuOtQ9duKg94MEtmDItkYIkbLE9aC1r5iMrzMg7LAha9bB0raVMONmyRpOG8vN+mVM1/ynqUGvAkhsaRk7zAEnoA6kEKOApiCWMLgTztDK9okki0a1KkZlxDmlxu1zpiLAgAkCRe2291k1T8PaoFztg60Eao52kNdj4Hw6tiEponWepZKCl+wrUr0bEG4NlvOCqc1By2Ykt5tTodqKn65pyPcr6lMdHmy1vUiSNGIAM2gzNhebR2hBmQshqmyirm0kGpVtBG2D0+QpFqnVosbpSWs0jLjIEnRDZO0wAOgKNCq0tBnMA2vqQZaxTa1SDhsJT14ysDxk9SDYwbeePOpdVcajVOkCJzE2gR0rsqaoiIoCIiAiIg5/LWMbTp3k6ct5skwQZIAB8kLh0MRRGXrfkce5q3vSVsmmNgd4biuU2nG3tH8iuI6dLF0ttQcabv6VsMxVI/pI4iFyqezxB+i2qfHvVG8yvTN21WHpVjdz2npWlO2/as6DTYtB4gFB0A07R1qQad3WFoepb8LflH0So0ASBBGUat6C/EVYMFVesWv+OqZaYO4tnx8Fn8Y74KZ2yCO5pQbAqq1ldaZxY/VNPBx+yl+KZ+pPQ8f1IOg2spiouf+Jp/C8cL90qf4hn/AFPlJ/lQbvrELlqHEM/P8p+iycSwfH8h+iDZ0klUDEsy5/yu+iyMQz8/yu+iC2VglUnFU84qfI76IcS34HHqHigmXKtzlE4nZT4SRfqJWPxD9Wi3hfwCDDqZOo93aoergc4gbib9ik5hdm5xnYY6ov2qQpgavr1oNd1Q+6SbxZvibKt1Fxznpd4CVulVueg1G4WPh+U9836lltD8x6mjuCuL1DT2NJ4fdBk0xxnaSR1GyyIH2TSOyOJHgoNYdfHfmPBBeF2gVw5AF/PQuzRPNHAdymqmiIoCIiAiIg5fLuGLg14E6MyIkwYv2Lg08RTPvN7PovV4ptQj/Lc1p/MCR3rx/K/o9yjVMivhuJpNnrNMlWjeYAcnDr+/hsVzafnzC8ZiPQPlR3+qpdDnNHUGBa3+7/lUZYodGIqjwSj6C1p8/dTC8FT9CuWRljAP/IqH+VblH0X5bH+upji8u76ZSo9q1QxLeb0+c15hno7y1/zCiP4A7vpKyryNynTipW5UohjCC4HDjRcNbTogHqSjswd/RPgSFEAbuz7Hb1LhY700wtN0GoH72tfbjLQeqVnD+muCf+mA3Oluz4uhUd4N3dp8Z8hZDfP3H2XOpcuYV3s16Z/iZ9jrW7TxdN1xUad4dPbIKC8BSDVhjtdj0z9CpSPP3CDICzCaQ8n6FA7zf6oEJCafdPV0qLqo7Ac9pgIJwshqoOJaDBcPa0buGejMcYVJ5VpRPrGZA+2DYmBrQb4CyCueeUGn2Zd7Xstc7LgP7o/FuvFKsc4ijUva1y2M0HQLlE1N657n1z7OGrHO5NJuoR7bwdupPwmLdlRY2/v1R8U+4HaoQbb6qodVCjT5HxRjSNFuWTnvyB/I3as/4crftDBl+hccmx+sHFKIGsPJWPXjaO/6KwejFT9qGrKjsEa3qP8AhF2vGVRYeyykMjOtpSjAxG/s3wpCv5nfCifQph9rFYo8KjG6591g1qVP0HwouTWefzVXeEKUbGGoueRkBxAOQyGa7rWwABqELn4TkKhT9inlte93/wBErohRRERAREQEREBERAREQEREBERBrVuT6L/bpU3fvMae8LSqei+Cdng8Of8Ass+i6yIOGfQ7k/8AYsP/AOpv0UT6F8n/ALFQ6GAdy7yIOIz0RwIywzBw0hrnarm+jmFGVKOD3/1Lqog5v+wcPLT6qS0y0lzyWmIJBLrWsps5Fw4iKLLFxFsi4y4jZMmdq30QaLeRsOAAMPSgN0QPVtgN+AW9ncrBybR/U0tX6NmrLUtpEFTcKwZMYODQPBWARksogSiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=' />
                                <Details>
                                    <ProductName><b>Product: </b> Nike Air Force 1</ProductName>
                                    <ProductId><b>ID: </b>CS506-P02-AF1-01</ProductId>
                                    <ProductColor color='white'/>
                                    <ProductSize><b>Size: </b> 34 EU</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$60</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimate Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Chekout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;