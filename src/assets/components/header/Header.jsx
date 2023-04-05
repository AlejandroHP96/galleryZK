import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import LogoSinFondo from '../../image/Logo_Negro_sin_fondo.png'
import '../App/App.css'

// css

const scaleImg = keyframes`

  0% 
  {
    transform: scale(1);
  }
  50% 
  {
    transform: scale(1.3);
  }
  100% 
  {
    transform: scale(1);
  }

`

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: 60px;
`

const ContainerInfoLogo = styled.div`
	display: flex;
	justify-content: center;
	width: 33%;

	@media (max-width: 630px) {
		justify-content: start;
	} ;
`

const Logo = styled.img`
	width: 100px;
	height: 100px;
	transition: 0.5s;

	animation: ${scaleImg} 15s infinite;

	@media (max-width: 830px) {
		width: 70px;
		height: 70px;
	}
`

const NameContainer = styled.div`
	width: 33%;

	@media (max-width: 630px) {
		display: none;
	} ;
`

const Name = styled.p`
	font-size: 20px;
	padding: 0 20px 0 20px;
	font-weight: bold;

	@media (max-width: 830px) {
		font-size: 15px;
	}
`

const HeaderNavbar = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 33%;
`

const TitleOption = styled.a`
	font-size: 20px;
	color: black;
	text-decoration: none;
	padding: 0 20px 0 20px;
	&:hover {
		text-decoration: underline;
	}
`

// Component Header

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	console.log(showMenu)
	return (
		<HeaderContainer>
			<NameContainer>
				<Name>Alejandro Herrera Pestana</Name>
			</NameContainer>

			<ContainerInfoLogo>
				<Logo src={LogoSinFondo}></Logo>
			</ContainerInfoLogo>

			<HeaderNavbar>
				<TitleOption href='#'>Inicio</TitleOption>
				<TitleOption href='#'>Fotografía</TitleOption>
				<TitleOption href='#'>Sobre Mi</TitleOption>
			</HeaderNavbar>
		</HeaderContainer>
	)
}

export default Header
