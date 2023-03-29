import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../atomic/button/Button'
import '../App/App.css'

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: end;
	height: 70px;
`

const HeaderNavbar = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 30%;
`

const TitleOption = styled.a`
	font-size: 20px;
	color: black;
	text-decoration: none;
`

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	console.log(showMenu)
	return (
		<HeaderContainer>
			<HeaderNavbar>
				<TitleOption href='#'>Inicio</TitleOption>
				<TitleOption href='#'>Fotografía</TitleOption>
				<TitleOption href='#'>Sobre Mi</TitleOption>
			</HeaderNavbar>
		</HeaderContainer>
	)
}

export default Header
