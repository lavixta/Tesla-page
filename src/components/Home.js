import React, {useState} from "react"
import styled from 'styled-components'
import Section from "./Section.js"
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                backgroundImg="model-s.jpg"
            />
            <Section
                title="model Y"
                backgroundImg="model-y.jpg" />

        </Container>
    )
}

export default Home
const Container = styled.div`
height: 100vh; 
width: 100vw;
`;

