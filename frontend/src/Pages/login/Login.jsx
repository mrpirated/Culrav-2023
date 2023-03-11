import React from "react";
import "./login.css";
// import { motion } from "framer-motion";
import img1 from "./assests/img1.jpg";
import img2 from "./assests/img2.jpg";
// import Lights from "./Lights";

function Login() {
  const toggleForm = async () => {
    let section = document.querySelector("section");
    let container = document.querySelector(".container");
    container.classList.toggle("active");
    section.classList.toggle("active");
  };

  const googleAuth = async () => {
    window.location.replace("http://localhost:3000/auth/google");
  };

  return (
    <>
      <section>
        {/* <motion.div
          className="absolute top-0 left-0 z-10"
          animate={{ y: [-500, 0] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{delay : 1}}
        >
          <Lights />
        </motion.div> */}

        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={img1} alt="" />
              <p className="text-white text-6xl z-20 absolute w-10 p-6">
                ログイン
              </p>
            </div>

            <div className="formBx">
              <form action="/auth/login" method="post">
                <h2>Sign In</h2>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required="true"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required="true"
                />
                <input type="submit" value="Login" />
                <p className="signup">
                  don't have an account?
                  <a href="#/" onClick={toggleForm}>
                    Sign up.
                  </a>
                </p>
              </form>
            </div>
          </div>

          <div className="user signupBx">
            <div className="formBx">
              <form action="/auth/register" method="post">
                <h2>Create an account</h2>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  required="true"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required="true"
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  required="true"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required="true"
                />
                <div className="signup_btn">
                  <input
                    className="signup_button"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="signup">
                  Already have an account?
                  <a href="#/" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
                <button className="signup_button2" onClick={googleAuth}>
                  Sign Up With Google
                </button>
              </form>
            </div>
            <div className="imgBx">
              <img src={img2} alt="" />
              <p className="text-white text-6xl z-20 absolute w-10 m-6 right-6">
                登録
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
