import React, {useState} from "react"
import styled from "styled-components"
import {useSelector} from 'react-redux'
import {Listcar} from "../features/CarSlide/carSlide"
function Header() {
    const [panelVisible, setP] = useState(false);
    const car = useSelector(Listcar)
    return (
        <Container>
            <a >
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {car && car.map((car, index) =>

                    <p><a href="#">
                        {car}
                    </a></p>
                )}
            </Menu>
            <ShopAccountMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <div onClick={() => setP(true)}><p> Menu </p></div>


            </ShopAccountMenu>
            <ListPanel show={panelVisible}>
                <CloseI onClick={() => setP(false)}><p>X</p></CloseI>
                <li>Existing Iventory</li>
                <li>Current Car</li>
                <li>New Items</li>
                <li>Used Car</li>
                <li>Sold out</li>
            </ListPanel>
        </Container >
    )
}

export default Header
const Container = styled.div`
display: flex;
position:fixed;
right:0 ;
left:0;
padding: 10px 20px;
`
const Menu = styled.div`
flex-direction: row; 
position: fixed;
display: flex; 
left: 50%;
transform: translate(-50%);
margin-top: 10px;
justify-content: center;
@media(max-width: 768px){
display: none;
}
p{
text-weight: 600; 
padding: 0 10px;
}
`
const ShopAccountMenu = styled.div`
position: fixed;
display: flex;
right: 10px;
padding: 10px 10px;
align-items: center;
a{
padding: 0 10px;
}
`
const ListPanel = styled.div`
position: fixed;
background-color:white; 
height: 100vh; 
display: flex; 
justify-content: flex-start;
flex-direction: column;
width: 25vw; 
top: 0; 
right: 0; 
list-style: none;
transform:${props => props.show ? `translateX(0)` : `translateX(100%)`};
transition: transform 0.2s;
li{
padding: 15px 10px; 
border-bottom: 1px solid rgba(0,0,0,.2); 


}

`
const CloseI = styled.div`
display: flex;
justify-content: flex-end; 
padding: 10px 20px;
`
