import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { NavIcon } from '../Navbar/navbarelements'
import Sidebar from '../sidebar/Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'


export const HeroSection = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}
  return (
    <HeroContainer>
        <Navbar toggle = {toggle}/>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
};
export default HeroSection ;