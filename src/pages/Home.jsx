import Navbar from '../components/navbar';
import Carousel from "../components/carousel";
import { slides } from "../components/data";


import "../pages/Home.css"
export default function Home() {

    return (
        <div>
             <Navbar />
            Carousel
            <Carousel images={slides} />
            <h1 align="center">Novidades</h1>
            <hr></hr>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some example text. Some example text.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
       <hr></hr>

        </div>
    );
}