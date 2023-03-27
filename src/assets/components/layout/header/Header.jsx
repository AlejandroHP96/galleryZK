import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../atomic/button/Button'
import '../App/App.css'
import { CiMenuBurger } from 'react-icons/ci'

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
`
const ContainerButtonMenu = styled.div`
	width: 3%;
	background-color: red;
`

const ContainerNav = styled.div`
	width: 97%;
	background-color: blue;
`

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	console.log(showMenu)
	return (
		<HeaderContainer>
			<ContainerButtonMenu></ContainerButtonMenu>
			<ContainerNav></ContainerNav>
			{/* <div className={`menu ${showMenu ? 'open' : ''}`}>
				<ButtonContainerOpen onClick={() => setShowMenu(!showMenu)}>
					<CiMenuBurger size={30} />
				</ButtonContainerOpen>
			</div> */}
		</HeaderContainer>
	)
}

export default Header
