import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'

const ImageComp = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
`

const ContainerCarousel = styled.div`
	width: 70%;
	height: 300px;
	box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

const ContainerAll = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const responsive = {
	0: { items: 1 },
	850: { items: 2 },
	1212: { items: 3 },
}

const handleDragStart = (e) => e.preventDefault()

const items = [
	<ImageComp src='/assets/image1.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image2.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image3.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image4.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image5.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image6.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image7.png' onDragStart={handleDragStart} />,
	<ImageComp src='/assets/image8.png' onDragStart={handleDragStart} />,
]

const Carrousel = () => {
	return (
		<ContainerAll>
			<ContainerCarousel>
				<AliceCarousel
					mouseTracking
					disableDotsControls
					disableButtonsControls
					responsive={responsive}
					items={items}
					autoPlayInterval={2000}
					autoPlay
					infinite
				/>
			</ContainerCarousel>
		</ContainerAll>
	)
}

export default Carrousel
