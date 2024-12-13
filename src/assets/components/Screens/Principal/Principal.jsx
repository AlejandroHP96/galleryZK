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
					rute={'/galleryZK/photografy'}
					imageRute={`${import.meta.env.BASE_URL}/assets/paula.png`}
					titleCard={'Fotografía'}
				/>
				<RedirectionCards
					rute={'galleryZK/aboutMe'}
					imageRute={`${import.meta.env.BASE_URL}/assets/sergio.png`}
					titleCard={'Sobre Mi'}
				/>
			</ContainerCard>
		</ContainerAllBody>
	)
}

export default Principal
