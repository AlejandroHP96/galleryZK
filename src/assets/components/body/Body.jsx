import React from 'react'
import styled from 'styled-components'
import './Body.css'
import CarouselComponent from '../Carrousel/Carrousel'

const Body = () => {
	const ContainerAllBody = styled.div`
		width: 100%;
		margin-top: 30px;
	`

	const TitleCarousel = styled.p`
		font-size: 50px;
		text-align: center;
		text-decoration: underline;
	`

	return (
		<ContainerAllBody>
			<TitleCarousel>Last Update</TitleCarousel>
			<CarouselComponent />
		</ContainerAllBody>
	)
}

export default Body
