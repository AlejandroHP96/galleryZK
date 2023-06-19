import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../theme/styleGlobal.css'

const ContainerPhotoCard = styled.div`
	width: 100%;
	height: 80%;
	background-color: red;
`

const PhotoCard = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const TitleTextContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const TitleCard = styled.p`
	font-size: 30px;
	color: #000;
`

const RedirectionCards = (props) => {
	const { rute, imageRute, titleCard } = props

	return (
		<Link className='redirectionCardsStyle' to={rute}>
			<ContainerPhotoCard>
				<PhotoCard src={imageRute}></PhotoCard>
			</ContainerPhotoCard>
			<TitleTextContainer>
				<TitleCard>{titleCard}</TitleCard>
			</TitleTextContainer>
		</Link>
	)
}

export default RedirectionCards
