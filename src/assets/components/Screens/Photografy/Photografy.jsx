import React from 'react'
import styled from 'styled-components'

const ContainerComponentPhotografy = styled.div`
	display: flex;
	justify-content: center;
`

const ContainerPhotos = styled.div`
	width: 90%;
	height: 10hv;
	background-color: red;
	justify-content: center;
`

const Photografy = () => {
	return (
		<ContainerComponentPhotografy>
			<ContainerPhotos>
				<p>test</p>
			</ContainerPhotos>
		</ContainerComponentPhotografy>
	)
}

export default Photografy
