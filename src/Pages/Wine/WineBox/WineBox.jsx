import './WineBox.scss';
import { motion } from "framer-motion";

import { containerVariants, titleVariants } from '../../../motionSettings/motionSettings'

import logo from '../../../assets/images/logo.png'


const WineBox = () => {


    return (
        <motion.section className="content" initial="exit" animate="enter" exit="exit" variants={containerVariants}>
            <img className="content--logo" src={logo} alt="logo" />
            <div className="content--wrapper">
                <span className="content--wrapper--subtitle">Awards winning wine</span>
                <motion.h1 className="content--wrapper--title" variants={titleVariants}>Chianti</motion.h1>
                <p className="content--wrapper--description">
                    The Sangiovese that forms the majority of the Chianti blend is a thin-skinned grape, so it makes translucent wines.<br /><br />
In the glass, Sangiovese displays a ruby red color with flashes of bright burnt orange –a hue commonly associated with aged wines.<br /><br />

Besides Sangiovese, Chianti wines may contain wine grapes like Canaiolo, Colorino, Cabernet Sauvignon, and even Merlot. White grapes were once allowed in Chianti Classico but not anymore.<br /><br />

The best examples of Chianti are a visceral tasting experience. Imagine the smells as you walk through an Italian grocery store: at the entrance, there’s a bowl of preserved sour Amarena cherries.<br /><br />

You walk under bunches of dried oregano, past a wall of dark, aromatic balsamic vinegar, then pass a counter where dry salami is being sliced. At the bar, dark espresso is dripping into a ceramic tazza. A whisper of sweet tobacco wafts in the door from the pipe of the old man outside.
                </p>
            </div>
            <div className="content--wine">
                <h2 className="content--wine--title">Sommeliers review</h2>
                <figure>
                    <img className="content--wine--avatar" src="http://s.gravatar.com/avatar/fe2fd4c489e52f7c243cbf4242203d53?s=80&r=g&s=60" alt="" />
                    <p className="content--wine--description">
                        "Chianti smells and tastes like Italy. There will be a little coarseness and tartness on the palate, but these aren’t flaws, they are classic characteristics of Sangiovese."
                </p>
                </figure>
            </div>
        </motion.section>
    );
}

export default WineBox;
