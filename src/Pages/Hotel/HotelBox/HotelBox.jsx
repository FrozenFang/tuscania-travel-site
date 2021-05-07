import React from "react";
import './HotelBox.scss';
import { motion } from "framer-motion";

import { containerVariants, titleVariants, imageContainerVariants, imageItemVariants } from '../../../motionSettings/motionSettings'

import logo from '../../../assets/images/logo.png'
import hotel1 from '../../../assets/images/hotel1.jpg'
import hotel2 from '../../../assets/images/hotel2.jpg'
import hotel3 from '../../../assets/images/hotel3.jpg'

const HotelBox = () => {

    return (
        <motion.section className="content" initial="exit" animate="enter" exit="exit" variants={containerVariants}>
            <img className="content--logo" src={logo} alt="logo" />
            <div className="content--wrapper">
                <span className="content--wrapper--subtitle">Top-rated property</span>
                <motion.h1 className="content--wrapper--title" variants={titleVariants}>Chianti<br />Residence</motion.h1>
                <p className="content--wrapper--description">
                    Hotel Carmen is less than 92 m from the beach, in the Costa Brava town of Roses. This small designer hotel offers charming, bright rooms with flat-screen satellite TV and a private bathroom.
                </p>
                <p className="content--wrapper--description">
                    The Carmen Hotel is housed in 3 renovated fishing cottages. It was designed by local artists, and has typical Mediterranean style. It is in the heart of Roses, with many shops, bars and restaurants nearby.
                 </p>
            </div>
            <motion.div className="content--images" variants={imageContainerVariants}>
                <motion.img src={hotel1} alt="" variants={imageItemVariants}/>
                <motion.img src={hotel2} alt="" variants={imageItemVariants}/>
                <motion.img src={hotel3} alt="" variants={imageItemVariants}/>
            </motion.div>
        </motion.section>
    );
}

export default HotelBox;
