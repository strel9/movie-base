import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home';
import MoviePage from '../pages/MoviePage';

import './App.css';

const App = () => {
	return (
		<>
			<Header />
			<Route path="/movie-base/" component={Home} exact />
			<Route
				path="/movie-base/movie/:id"
				render={({ match }) => {
					const { id } = match.params;
					return <MoviePage movieId={id} />;
				}}
			/>
		</>
	);
};
export default App;
