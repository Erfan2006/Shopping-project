import "./Categories.css"
import Maleimg from "./../images/Male.jpg"
import Femaleimg from "./../images/Female.jpg"
import Kidsimg from "./../images/Kids.png"
import { motion } from "framer-motion"

const Categories = () => {


    const animateFrom = { opacity: 0, y: -80 }
    const animateTo = { opacity: 1, y: 0 }

    return ( 


<div className="Container">
<div className="Categorie-title">
<h2> Put the Title Here </h2>
</div>


<div class="category-boxes">
        <div class="category-box">
            <motion.img initial={animateFrom} animate={animateTo} transition={{ delay: 1 }} src={Maleimg} alt="Male"/>
            <div class="overlay">
                <p class="text"> Male </p>
            </div>
        </div>
        <div class="category-box">
            <motion.img initial={animateFrom} animate={animateTo} transition={{ delay: 1 }} src={Femaleimg} alt="Female"/>
            <div class="overlay">
    <           p class="text"> Female </p>
            </div>
        </div>
        <div class="category-box">
            <motion.img initial={animateFrom} animate={animateTo} transition={{ delay: 1 }} src={Kidsimg} alt="Kids"/>
            <div class="overlay">
                <p class="text"> Kids </p>
            </div>
        </div>
    </div>

</div>
    



     );
}
 
export default Categories;