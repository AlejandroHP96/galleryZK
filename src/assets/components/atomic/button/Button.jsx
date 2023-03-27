import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
	const { showMenu, setShowMenu } = props
	return (
		<ButtonContainer onClick={() => setShowMenu(!showMenu)}></ButtonContainer>
	)
}

export default Button
