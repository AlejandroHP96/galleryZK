import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image1 from '../../image/testImage/image1.jpg'
import Image2 from '../../image/testImage/image2.jpg'
import Image3 from '../../image/testImage/image3.jpg'
import Image4 from '../../image/testImage/image4.jpg'
import Image5 from '../../image/testImage/image5.jpg'
import Image6 from '../../image/testImage/image6.jpg'
import Image7 from '../../image/testImage/image7.jpg'
import Image8 from '../../image/testImage/image8.jpg'
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
	<ImageComp src={Image1} onDragStart={handleDragStart} />,
	<ImageComp src={Image2} onDragStart={handleDragStart} />,
	<ImageComp src={Image3} onDragStart={handleDragStart} />,
	<ImageComp src={Image4} onDragStart={handleDragStart} />,
	<ImageComp src={Image5} onDragStart={handleDragStart} />,
	<ImageComp src={Image6} onDragStart={handleDragStart} />,
	<ImageComp src={Image7} onDragStart={handleDragStart} />,
	<ImageComp src={Image8} onDragStart={handleDragStart} />,
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
