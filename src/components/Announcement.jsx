import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: #A3C4F3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Oferta Especial Envio Gratis en Todo el Pais!!!
        </Container>
    )
}

export default Announcement
