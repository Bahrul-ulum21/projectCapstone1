import React from 'react';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import ReviewPage from './pages/reviewPage';
import ContactPage from './pages/contactPage';
import FaqPage from './pages/faqPage';
import DetailPageWrapper from './pages/detailPage';

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/review' element={<ReviewPage />} />
					<Route path='/faq' element={<FaqPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path="/dataRuko/:id" element={<DetailPageWrapper />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
