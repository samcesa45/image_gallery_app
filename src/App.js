import React, { useState } from 'react';
import ImageList from './components/ImageList';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import api from './services/api';
function App() {
	const [images, setImages] = useState([]);
	async function onSearchSubmit(searchTerm) {
		const response = await api.get('/search/photos', {
			params: { query: searchTerm },
		});
		console.log(response.data.results);
		setImages(response.data.results);
	}

	return (
		<Layout>
			<SearchBar onSearchSubmit={onSearchSubmit} />

			<ImageList images={images} />
		</Layout>
	);
}

export default App;
