import React, { useContext } from "react";
import { Context } from "../store/appContext";
import background from "../../img/all.jpg";
import "../../styles/home.css";
import { CardsHome } from "../component/cardsHome";
import { WelcomeHome } from "../component/welcomehome";
import books from "../../img/bestbooksfront.jpg"
import juegos from "../../img/juegos.jpeg"
import tv from "../../img/movies,shows,home.jpg"
import questionario from "../../img/questionario.jpg"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center ">
			<WelcomeHome />
			<CardsHome />
			{/* Cards con carousel */}
			<div className="d-flex justify-content-center align-items-center" >
				<div className="col-12 col-sm-10 col-md-11 col-lg-11 col-xl-11 m-3">
					<div className="card m-3" style={{backgroundColor: "#EAD8C0", maxwidth: "80%" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<div className="card-body">
									<h5 className="card-title">MOVIES</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div className="col-md-8">
								<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src={books} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={tv} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={juegos} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
									</div>
									<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="card m-3" style={{backgroundColor: "#EAD8C0", maxwidth: "80%" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<div className="card-body">
									<h5 className="card-title">SHOWS</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div className="col-md-8">
								<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src={books} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={tv} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={juegos} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
									</div>
									<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="card m-3" style={{backgroundColor: "#EAD8C0", maxwidth: "80%" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<div className="card-body">
									<h5 className="card-title">BOOKS</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div className="col-md-8">
								<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src={books} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={tv} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={juegos} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
									</div>
									<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="card m-3" style={{backgroundColor: "#EAD8C0", maxwidth: "80%" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<div className="card-body">
									<h5 className="card-title">JUEGOS</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div className="col-md-8">
								<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src={books} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={tv} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
										<div className="carousel-item">
											<img src={juegos} className="d-block w-100" alt="..." style={{ height: "300px", objectFit: "cover" }} />
										</div>
									</div>
									<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div className=" container d-flex flex-column justify-content-center align-items-centerp-3 m-2" >
				<h1 className="col"> No sabes que ver? Responde a unas pocas preguntas y encontramos las pelis que no sabias que querias ver</h1>
				<a href="#" className="btn btn-primary mt-auto col-2">Encuentra lo que buscas</a>
			</div>
		</div>
	);
};
