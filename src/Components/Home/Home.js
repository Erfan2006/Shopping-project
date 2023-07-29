import "./Home.css";
import Mainimg from "./../images/main-1.jpg"


const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <div className="Content">
          <div className="Text">
            <h1>STEP UP</h1>
            <h2>Do not miss the offers!</h2>
            <button class="shop-now-button">Shop Now</button>
          </div>
          <div className="Image">
            <img src={Mainimg} alt="First pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Home;