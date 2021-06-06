import React, {useState} from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Header from './Header.js'
import Bounce from "react-reveal/Bounce"
function Section({title, backgroundImg}) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Header />
            <ItemText >
                <h1 style={{padding: "10px 10px"}}>
                    {title}
                </h1>
                <p>
                    Order Online for Touchless Delivery
                </p>
            </ItemText>
            <Fade bottom>
                <div>
                    <ButtonGroup>
                        <LeftButton>

                            Custom Order
                </LeftButton>
                        <RightButton>
                            Existing Inventory
                </RightButton>
                    </ButtonGroup>
                    <Arrow src="/images/down-arrow.svg">
                    </Arrow>
                </div>
            </Fade>

        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image:url("/images/${props => props.bgImg}");
background-size: cover;
background-repeat: no-repeat
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`;
const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
@media(max-width:700px){
flex-direction: column;
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px ;
color: white;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
margin: 20px;
`
const RightButton = styled(LeftButton)`
background:white ; 
opacity: 0.8;
color: black; 

`
const Arrow = styled.img`
width: 100vw; 
height: 20px; 
animation:animateDown infinite 2s; 
overflow-x: hidden;
`
