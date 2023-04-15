import Header from '../header/Header'
import Principal from '../Screens/Principal/Principal'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'
import Photografy from '../Screens/Photografy/Photografy'

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Principal />} />
				<Route path='//photografy' element={<Photografy />} />
			</Routes>
		</Router>
	)
}

export default App
