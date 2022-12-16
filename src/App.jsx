import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import Contents from './Pages/Main/Contents';
import Home from './Pages/Main/Home';
import Dashboard from './layout/Dashboard.jsx';
import ContentList from './Pages/Dashboard/ContentList';
import AddContent from './Pages/Dashboard/AddContent';
import SingleContent from './Pages/Main/SingleContent';
import ReadingHistory from './Pages/Main/ReadingHistory';


function App() {
	return (
		
			<BrowserRouter>
			<Routes>
			<Route path="/" element={<Main/>}>
			<Route path="" element={<Home/>} />
			<Route path="contents" element={<Contents />} />
			<Route path="content/:id" element={<SingleContent/>} />
			<Route path="reading-history" element={<ReadingHistory/>} />
			</Route> 
			
			<Route path="/dashboard/" element={<Dashboard />}>
			<Route path="content" element={<ContentList />} />
			<Route path="add-content" element={<AddContent />} />
			</Route>
		  </Routes>
		</BrowserRouter>
		
	);
}

export default App;
