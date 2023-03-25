import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	aling-item: center;
	background-color: #f2f;
	width: 100%;
	margin: 0;
`

const TitleText = styled.p`
	padding: 10px;
`

const Header = () => {
	return (
		<HeaderContainer>
			<TitleText>Header</TitleText>
		</HeaderContainer>
	)
}

export default Header
