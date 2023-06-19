import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import LogoSinFondo from '../../image/Logo_Negro_sin_fondo.png'
import { Link } from 'react-router-dom'
import '../../theme/styleGlobal.css'

// css

const scaleImg = keyframes`

  0% 
  {
    transform: scale(1);
  }
  30% 
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
	margin-bottom: 50px;
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

	animation: ${scaleImg} 5s infinite;

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

// Component Header

const Header = () => {
	return (
		<HeaderContainer>
			<NameContainer>
				<Name>Alejandro Herrera Pestana</Name>
			</NameContainer>

			<ContainerInfoLogo>
				<Logo src={LogoSinFondo}></Logo>
			</ContainerInfoLogo>

			<HeaderNavbar>
				<Link className='styleLink' to={'/'}>
					Inicio
				</Link>

				<Link className='styleLink' to={'/photografy'}>
					Fotografía
				</Link>

				<Link className='styleLink' to={'/galleryZK/aboutMe'}>
					Sobre Mi
				</Link>
			</HeaderNavbar>
		</HeaderContainer>
	)
}

export default Header
