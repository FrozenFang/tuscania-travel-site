import React from "react";
import './ContentBox.scss';
import { motion } from "framer-motion";

import { containerVariants, titleVariants, imageContainerVariants, imageItemVariants } from '../../../motionSettings/motionSettings'


import logo from '../../../assets/images/logo.png'
import windmill from '../../../assets/images/001-windmill.png'
import cityscape from '../../../assets/images/002-cityscape.png'
import wine from '../../../assets/images/003-wine.png'

const ContentBox = () => {

    return (
        <motion.section className="content" initial="exit" animate="enter" exit="exit" variants={containerVariants}>

            <img className="content--logo" src={logo} alt="logo" />
            <div className="content--wrapper">
                <span className="content--wrapper--subtitle">Need to relax?</span>
                <motion.h1 className="content--wrapper--title" variants={titleVariants}>Visit<br />Tuscany</motion.h1>
                <p className="content--wrapper--description">
                    From the Etruscans to the Romans to the Renaissance, Tuscany is possibly the greatest repository of art in the world, from extraordinary paintings and sculpture to frescoes and architectural masterpieces.
                </p>
                <p className="content--wrapper--description">
                    Visitors to Tuscany come for many reasons. Many come in search of fine art, others to explore the extraordinary countryside.
                 </p>
                <p className="content--wrapper--description">
                    Gourmets and wine buffs descend on Tuscany to enjoy the simple yet wonderful cuisine and wine. Walkers enjoy the mountain paths, cyclists the rolling hills, summer vacationers the sea coast and islands.
                </p>
                <button className="content--wrapper--button">Book now</button>
            </div>
            <motion.ul className="content--perks" variants={imageContainerVariants}>
                <motion.li className="content--perks--item" variants={imageItemVariants}>
                    <img className="content--perks--item--image" src={windmill} alt="" />
                    <span className="content--perks--item--title">Countryside</span>
                </motion.li>
                <motion.li className="content--perks--item" variants={imageItemVariants} >
                    <img className="content--perks--item--image" src={cityscape} alt="" />
                    <span className="content--perks--item--title">Architecture</span>
                </motion.li>
                <motion.li className="content--perks--item" variants={imageItemVariants}>
                    <img className="content--perks--item--image" src={wine} alt="" />
                    <span className="content--perks--item--title">Vineyards</span>
                </motion.li>
            </motion.ul>
        </motion.section>
    );
}

export default ContentBox;
