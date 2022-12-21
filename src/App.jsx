import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import Contents from './Pages/Main/Contents';
import Home from './Pages/Main/Home';
import Dashboard from './layout/Dashboard.jsx';
import AddContent from './Pages/Dashboard/AddContent';
import SingleContent from './Pages/Main/SingleContent';
import ReadingHistory from './Pages/Main/ReadingHistory';
import AllContents from './Pages/Dashboard/AllContents';


function App() {
	return (
		
			<BrowserRouter>
			<Routes>
			{/* main layout */}
			<Route path="/" element={<Main/>}>
				<Route path="" element={<Home/>} />
				<Route path="contents" element={<Contents />} />
				<Route path="content/:id" element={<SingleContent/>} />
				<Route path="reading-history" element={<ReadingHistory/>} />
			</Route> 
			{/* dashboard layout */}
			<Route path="/dashboard/" element={<Dashboard />}>
				<Route path="content" element={<AllContents />}/>
				<Route path="add-content" element={<AddContent />}/>
				<Route path="edit-content/:id" element={<AddContent />}/>
			</Route>
		  </Routes>
		</BrowserRouter>
		
	);
}

export default App;
