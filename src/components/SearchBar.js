import React, { useState } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({ onSearchSubmit }) => {
	const [search, setSearch] = useState('');

	function handleChange(e) {
		setSearch(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		onSearchSubmit(search.toLowerCase());
	}
	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.control}>
				<label>Search</label>
				<input
					type="text"
					placeholder="Search image"
					value={search}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
