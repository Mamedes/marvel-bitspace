import React from 'react'
import {HeaderTop}from './styles'
import Logo from '../../assets/img/marvel.png'

const Header: React.FC = () => {
    return (
        <HeaderTop>
        <a href="/">
             <img src={Logo} alt="Marvel" />
        </a>     
        </HeaderTop>
    )
}
export default Header