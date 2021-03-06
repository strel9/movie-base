import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';

import {
	// setSortBy,
	// setTotalPages,
	setCurrentPage,
	// setMoviesGenre,
	setMoviesGenreActive,
	// setSortByPrimaryReleaseYear,
} from '../redux/actions/filters';
// import PropTypes from 'prop-types';
// import classNames from 'classnames'

const Sidebar = ({
	// moviesWillWatch,
	// moviesGenre,
	// moviesGenreActive,
	// currentPage,
	// totalPages,
	// addMoviesGenre,
	// removeMoviesGenre,
	onChangeSortBy,
	onChangeYear,
	// paginationIncrease,
	// paginationDecrease,
}) => {
	const dispatch = useDispatch();

	const { moviesGenre, moviesGenreActive, totalPages, currentPage } = useSelector(
		({ filters }) => filters,
	);
	const arrSortBy = [
		{ id: 'popularity.desc', name: 'Popularity ↓' },
		{ id: 'popularity.asc', name: 'Popularity ↑' },
		{ id: 'release_date.desc', name: 'Release Date ↓' },
		{ id: 'release_date.asc', name: 'Release Date ↑' },
		{ id: 'vote_average.desc', name: 'Vote ↓' },
		{ id: 'vote_average.asc', name: 'Vote ↑' },
		{ id: 'original_title.asc', name: 'Title A-Z' },
		{ id: 'original_title.desc', name: 'Title Z-A' },
	];

	const generateMoviesYearRelease = () => {
		let years = [];
		for (let index = new Date().getFullYear(); index > 1970; index--) {
			years.push(index);
		}
		return years;
	};
	const generateYears = generateMoviesYearRelease();

	const years = generateYears.map((item) => (
		<option key={item} value={item}>
			{item}
		</option>
	));

	const addMoviesGenre = (id) => {
		const updateCurrentGenre = [...moviesGenreActive, id];
		dispatch(setMoviesGenreActive(updateCurrentGenre));
		dispatch(setCurrentPage(1));
	};

	const removeMoviesGenre = (id) => {
		const updateCurrentGenre = moviesGenreActive.filter((item) => item !== id);
		dispatch(setMoviesGenreActive(updateCurrentGenre));
	};

	const paginationIncrease = () => {
		const updateCurrentPage = currentPage + 1;
		dispatch(setCurrentPage(updateCurrentPage));
	};

	const paginationDecrease = () => {
		if (currentPage >= 2) {
			const updateCurrentPage = currentPage - 1;
			dispatch(setCurrentPage(updateCurrentPage));
		}
	};

	return (
		<Form className="sidebar mb-2 p-2">
			<h3 className="sidebar-top">Filters</h3>
			<div className="mb-3">
				<Form.Label>Sort By:</Form.Label>
				<Form.Control variant="info" as="select" onChange={onChangeSortBy}>
					{arrSortBy.map((item) => (
						<option key={item.name} value={item.id}>
							{item.name}
						</option>
					))}
				</Form.Control>
			</div>
			<div className="mb-3">
				<Form.Label className="">Release Year:</Form.Label>
				<Form.Control as="select" onChange={onChangeYear}>
					<option>Сhoose year:</option>
					{years}
				</Form.Control>
			</div>
			<div className="mb-3">
				<Form.Label>Сhoose genre:</Form.Label>
				<div className="d-flex">
					<div className="">
						{moviesGenre.map(({ name, id }) => {
							const isActive = moviesGenreActive.indexOf(id) !== -1;

							return (
								<Button
									key={id}
									className={isActive ? 'active' : ''}
									variant="outline-info"
									onClick={() => (isActive ? removeMoviesGenre(id) : addMoviesGenre(id))}>
									{name}
								</Button>
							);
						})}
					</div>
				</div>
			</div>

			{/* <Button variant="primary">Clear filter</Button> */}

			<div className="pagination btn-group d-flex align-items-center">
				<Button
					disabled={currentPage === 1}
					className="pagination__button"
					variant="info"
					onClick={() => paginationDecrease()}>
					Back
				</Button>

				<div className="pagination__pages p-2">
					{totalPages ? `${currentPage} из ${totalPages}` : ''}
				</div>

				<Button
					className="pagination__button"
					variant="info"
					onClick={() => {
						paginationIncrease();
					}}>
					Forward
				</Button>
			</div>
			{/* <Pagination>
					<Pagination.Prev onClick={() => paginationDecrease()} />
					<Pagination.Item active>{currentPage}</Pagination.Item>
					<Pagination.Item onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
						{currentPage + 1}
					</Pagination.Item>
					<Pagination.Item onClick={() => dispatch(setCurrentPage(currentPage + 2))}>
						{currentPage + 2}
					</Pagination.Item>
					<Pagination.Ellipsis />
					<Pagination.Item onClick={() => dispatch(setCurrentPage(currentPage + 10))}>
						{currentPage + 10}
					</Pagination.Item>
					<Pagination.Next
						onClick={() => {
							paginationIncrease();
						}}></Pagination.Next>
				</Pagination> */}
		</Form>
	);
};

export default Sidebar;
