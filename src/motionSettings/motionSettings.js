export const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};

export const containerVariants = {
    exit: {
        y: "-30%",
        opacity: 0,
        transition
    },
    enter: {
        y: "0%",
        opacity: 1,
        transition
    }
};

export const mediaBoxVariants = {
    exit: {
        y: "30%",
        opacity: 0,
        transition
    },
    enter: {
        y: "0%",
        opacity: 1,
        transition
    }
};

export const titleVariants = {
    exit: { x: 50, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: {delay: 0.1, ...transition } }
};

export const imageContainerVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { staggerChildren: 0.2, ...transition } }
}

export const imageItemVariants = {
    exit: { opacity: 0 },
    enter: { opacity: 1 }
}