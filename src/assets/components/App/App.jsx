import styled from 'styled-components'
import Header from '../header/Header'
import Body from '../body/Body'

const ContainerAll = styled.div`
	width: 100%;
	height: 100vh;
`

const App = () => {
	return (
		<ContainerAll>
			<Header />
			<Body />
		</ContainerAll>
	)
}

export default App
