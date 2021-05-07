import React from "react";

import '../../App.scss';
import WineBox from "./WineBox/WineBox";
import ImageBox from "../../components/ImageBox/ImageBox";

const Wine = ({ image }) => {
    return (
        <header className="grid-auto-sm grid_reverse">
            <section className="child col-6">
                <WineBox />
            </section>
            <section className="child col-6 no-padding">
                <ImageBox image={image}/>
            </section>
        </header>
    );
}

export default Wine;
