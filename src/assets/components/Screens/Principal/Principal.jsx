import React from 'react'
import Carrousel from '../../Carrousel/Carrousel'
import styled from 'styled-components'
import RedirectionCards from '../../RedirectionCards/RedirectionCards'

const ContainerAllBody = styled.div`
	width: 100%;
	margin-top: 30px;
`

const TitleCarousel = styled.p`
	font-size: 50px;
	text-align: center;
	text-decoration: underline;
`

const ContainerCard = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	margin: 50px 0;
`

const Principal = () => {
	return (
		<ContainerAllBody>
			<TitleCarousel>Last Update</TitleCarousel>
			<Carrousel />
			<ContainerCard>
				<RedirectionCards
					rute={'/photografy'}
					imageRute={'src/assets/image/testImage/paula.jpg'}
					titleCard={'Fotografía'}
				/>
				<RedirectionCards
					rute={'/aboutMe}'}
					imageRute={'src/assets/image/testImage/sergio.jpg'}
					titleCard={'Sobre Mi'}
				/>
			</ContainerCard>
		</ContainerAllBody>
	)
}

export default Principal
