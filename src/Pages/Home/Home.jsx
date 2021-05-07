import React from "react";
import ContentBox from "./ContentBox/ContentBox";
import ImageBox from "../../components/ImageBox/ImageBox";

import '../../App.scss';

const Home = ({ image }) => {
    return (
        <header className="grid-auto-sm grid_reverse">
            <section className="child col-6">
                <ContentBox />
            </section>
            <section className="child col-6 no-padding">
                <ImageBox image={image}/>
            </section>
        </header>
    );
}

export default Home;
