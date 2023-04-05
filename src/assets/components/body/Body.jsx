import React from 'react'
import styled from 'styled-components'
import './Body.css'
import CarouselComponent from '../Carrousel/Carrousel'

const Body = () => {
	const ContainerAllBody = styled.div`
		width: 100%;
		margin-top: 30px;
	`

	const infoContainer = styled.div``

	return (
		<ContainerAllBody>
			<CarouselComponent />
		</ContainerAllBody>
	)
}

export default Body
