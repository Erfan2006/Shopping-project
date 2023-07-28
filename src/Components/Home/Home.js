import "./Home.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Header from './../images/main-1.svg'
// import Main from './../../images/main-2.svg'



const Home = () => {
    return ( 

        <div className="Home"> 
            <div className="Container">
                <h1 className="Hello"> Hello </h1>
                <h2> Welcome to the Store !</h2>
                <Link to="Shop" className="shop-now-btn"> Shop Now !</Link>
            </div>
            <img className="Header" src={Header} alt="Failed to Load :(" />
            {/* <img className="Header" src={Main} alt="Failed to Load :(" /> */}
        </div>
     );
}
 
export default Home;
