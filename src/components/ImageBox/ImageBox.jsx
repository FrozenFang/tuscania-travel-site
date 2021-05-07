import './ImageBox.scss';
import { motion } from "framer-motion";

import { mediaBoxVariants } from '../../motionSettings/motionSettings'

const ImageBox = ({ image }) => {
    return (
        <motion.section className="media"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={mediaBoxVariants}
            style={{ backgroundImage: `url(${image})` }}
        >
        </motion.section>

    );
}

export default ImageBox;
