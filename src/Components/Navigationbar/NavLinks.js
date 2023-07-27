import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {


    const animateFrom = {opacity: 0, y: -80}
    const animateTo = {opacity: 1, y: 0}


    return ( 
    <ul>

        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.CloseMobileMenu()}>
          <Link to="./"> Home </Link>
        </motion.li>


        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => props.isMobile && props.CloseMobileMenu()}>
          <Link to="./Shop"> Shop </Link>
        </motion.li>


        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.20}}
        onClick={() => props.isMobile && props.CloseMobileMenu()}>
          <Link to="./"> Contact </Link>
        </motion.li>


        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.CloseMobileMenu()}>
          <Link to="./Login"> Login </Link>
        </motion.li>  

    </ul> 
     );
}
 
export default NavLinks;