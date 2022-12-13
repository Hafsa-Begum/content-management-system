import React from 'react';
// import routes from './routes/routes'
// import Content from './components/Content/Content.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './layout/Main';
import Contents from './Pages/Main/Contents';
import Home from './Pages/Main/Home';
import Dashboard from './layout/Dashboard.jsx';

function App() {
	return (
		
			<BrowserRouter>
			<Navbar></Navbar>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contents" element={<Contents />} />
			<Route path="/dashboard" element={<Dashboard />} />
		  </Routes>
		</BrowserRouter>
		
	);
}

export default App;
