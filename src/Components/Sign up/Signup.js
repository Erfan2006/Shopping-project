import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SignupImg from "./../images/SignupImg.svg";
import "./Signup.css";

function Login() {
  const [email , setEmail ] = useState("");
  const [phonenumber , setPhonenumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ email , phonenumber , username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Redirect user to ACCOUNT
          history.push("/Account");
        } else {
          setError("Your Username and Password does not match :(");
        }
      })
      .catch((error) => {
        setError("An error occurred while logging in");
      });

      // Redirect to the Sign up page 

      document.getElementById("Sign-in").addEventListener("click", function() {
        window.location.href = "/Login";
      });
  }


  

  return (
    <div className="login-container">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src={SignupImg} alt="Failed to load" />
          </figure>
        </div>
        <div className="signin-form">
          <h3 className="form-title"> Sign up </h3>
          <form className="Login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-label">Email :</div>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
            </div>


            <div className="input-container">
              <div className="input-label">Phone Number :</div>
              <input
                type="text"
                value={phonenumber}
                onChange={(event) => setPhonenumber(event.target.value)}
              />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
            </div>


            <div className="input-container">
              <div className="input-label">Username :</div>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
            </div>


            <div className="input-container">
              <div className="input-label">Password :</div>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
            </div>
            <button className="submit-btn" type="submit">Submit</button>
          </form>
          {error && <p className="error">{error}</p>}
          <div className="social-login">
            <span className="social-lable"> OR Sign up with </span>
              <div class="login-buttons">
                

                <div class="login-container-google">
                  <a href="./" class="google-button">
                    <span class="btn-google-icon"></span>
                    <span>Sign up with Google</span>
                  </a>
                </div>


                <div class="login-container-facebook">
                  <a href="./" class="facebook-button">
                  <span class="btn-facebook-icon"></span>
                    <span>Sign up with Facebook</span>
                  </a>
                </div>
              

           </div>
          </div>
          <p className="sign-up-massage"> Already have an account ? <Link className="sign-up" id="Sign-in" to="./Login" > Sign in ! </Link> </p>
        </div>
      </div>
    </div>
  );
}

export default Login;