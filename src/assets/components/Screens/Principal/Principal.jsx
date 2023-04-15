import React from 'react'
import Carrousel from '../../Carrousel/Carrousel'
import styled from 'styled-components'

const ContainerAllBody = styled.div`
	width: 100%;
	margin-top: 30px;
`

const TitleCarousel = styled.p`
	font-size: 50px;
	text-align: center;
	text-decoration: underline;
`

const Principal = () => {
	return (
		<ContainerAllBody>
			<TitleCarousel>Last Update</TitleCarousel>
			<Carrousel />
		</ContainerAllBody>
	)
}

export default Principal
