import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#F4EAE0'}}>
			<div className="container-fluid">
				<a className="navbar-brand" href="#" style={{color: '#000000'}}>Navbar</a>
				<button className="navbar-toggler border border-dark border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
					<span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#" style={{color: '#000000'}}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" style={{color: '#000000'}}>Recommendation Quiz</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" style={{color: '#000000'}}>Populares</a>
						</li>
						<li className="nav-item dropdown" >
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#000000'}}>
								Catalogue
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Movies</a></li>
								<li><a className="dropdown-item" href="#">Shows</a></li>
								<li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item" href="#">Books</a></li>
								<li><a className="dropdown-item" href="#">Games</a></li>
							</ul>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button className="btn btn-outline-dark" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
