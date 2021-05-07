import React from "react";

import '../../App.scss';
import HotelBox from "./HotelBox/HotelBox";
import ImageBox from "../../components/ImageBox/ImageBox";

const Home = ({ image }) => {
    return (
        <header className="grid-auto-sm grid_reverse">
            <section className="child col-6">
                <HotelBox />
            </section>
            <section className="child col-6 no-padding">
                <ImageBox image={image}/>
            </section>
        </header>
    );
}

export default Home;
