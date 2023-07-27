import './AboutCenter.css'
import image from './../../images/main-3.svg'
import { motion } from 'framer-motion';

const AboutCenter = () => {

    const animateFrom = { opacity: 0, y: -80 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <div className='About__Center'>
            <div className='Container'>
                <div className='col_1'>
                    <motion.img src={image} alt='Failed to Load :(' initial={animateFrom} animate={animateTo} transition={{ delay: 0.6 }} />
                </div>
                <motion.h1 initial={animateFrom} animate={animateTo} transition={{ delay: 0.6 }}>About Us !</motion.h1>
                <div className='col_2'>
                    <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay: 0.6 }}>
                        Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of Good and Evil". The most common form of Lorem ipsum is the following:
                        Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of Good and Evil". The most common form of Lorem ipsum is the following:
                    </motion.h2>
                </div>
            </div>
        </div>
    );
}

export default AboutCenter;