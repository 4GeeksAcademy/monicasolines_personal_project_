import React from "react";
import books from "../../img/bestbooksfront.jpg"
import juegos from "../../img/juegos.jpeg"
import tv from "../../img/movies,shows,home.jpg"
import questionario from "../../img/questionario.jpg"

export const CardsHome = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 d-flex justify-content-center align-items-stretch">
            <div className="card rounded my-3 mx-2 text-bg-dark" style={{ backgroundColor: "#EAD8C0", width: "18rem", height: "100%" }}>
                <img src={tv} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
                </div>
            </div>
            <div className="card rounded my-3 mx-2 text-bg-dark" style={{ backgroundColor: "#EAD8C0", width: "18rem", height: "100%" }}>
                <img src={books} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
                </div>
            </div>
            <div className="card rounded my-3 mx-2 text-bg-dark" style={{ backgroundColor: "#EAD8C0", width: "18rem", height: "100%" }}>
                <img src={juegos} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
                </div>
            </div>
            <div className="card rounded my-3 mx-2 text-bg-dark" style={{ backgroundColor: "#EAD8C0", width: "18rem", height: "100%" }}>
                <img src={questionario} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
