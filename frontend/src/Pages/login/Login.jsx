import "./login.css";
import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import { useSignup } from "../../Hooks/useSignup";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mnnitID, setMnnitID] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [reg, setReg] = useState(false);
  const { login, error } = useLogin();
  const { signup, isLoadingSignup, errorSignup } = useSignup();

  const toggleForm = async () => {
    let section = document.querySelector("section");
    let container = document.querySelector(".container");
    container.classList.toggle("active");
    section.classList.toggle("active");
    setPassword("");
    setEmail("");
    setName("");
    setPasswordAgain("");
    setMessage("");
    setConfirm("");
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regExp.test(password)) {
      // setMessage("Password is valid");
      if (password === passwordAgain) {
        // setConfirm("Password validation successful");
        await signup(name, email, password, mnnitID);
      } else {
        // setConfirm("Passwords are different");
        toast.warn("Confirm Password is not matching with password");
      }
    } else if (!regExp.test(password)) {
      // setMessage("Password is invalid");
      toast.warn(
        "Password must contain at least one numeric digit, one uppercase and one lowercase letter and length should be greater than 8 "
      );
    } else {
      setMessage("");
    }
  };

  // const googleAuth = async () => {
  //   window.location.replace("http://localhost:3000/auth/google");
  // };

  return (
    <div>
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <p className="text-white text-6xl z-20 absolute w-10 p-6">
                ログイン
              </p>
            </div>

            <div className="formBx">
              <form onSubmit={handleSubmitLogin}>
                <h2>Sign In</h2>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required="true"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="LOGIN" />
                {error && (
                  <div className="text-white lg:text-black w-full text-center pt-[10px]">
                    {error}
                  </div>
                )}
                <p className="signup text-center">
                  don't have an account?
                  <a className="pl-2" href="#/" onClick={toggleForm}>
                    Sign up
                  </a>
                </p>
              </form>
              <a href="/">
                <button className="signup_button2 mt-[30px]">
                  BACK TO HOME
                </button>
              </a>
            </div>
          </div>

          <div className="user signupBx">
            <div className="formBx">
              <form onSubmit={handleSubmitSignup}>
                <h2>Create an account</h2>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  required="true"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required="true"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  required="true"
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="text-white lg:text-black">{message}</div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required="true"
                  minLength={8}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  value={passwordAgain}
                />
                <div className="flex items-center my-[5px]">
                  <span className="mr-2">
                    <label className="text-[14px] ml-[10px] text-white lg:text-black">
                      ARE YOU FROM MNNIT?
                    </label>
                  </span>
                  <span>
                    <input type="checkbox" onChange={() => setReg(!reg)} />
                  </span>
                </div>
                <div>
                  {reg ? (
                    <input
                      type="number"
                      placeholder="Registration Number"
                      required="true"
                      onChange={(e) => setMnnitID(e.target.value)}
                      value={mnnitID}
                    ></input>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>
                <div className="text-white lg:text-black">{confirm}</div>
                <div className="signup_btn">
                  <input
                    className="signup_button"
                    type="submit"
                    value="SIGN UP"
                    disabled={isLoadingSignup}
                  />
                </div>
                {errorSignup && (
                  <div className="text-white lg:text-black w-full text-center pt-[10px]">
                    {errorSignup}
                  </div>
                )}
                <p className="signup text-center">
                  Already have an account?
                  <a className="pl-2" href="#/" onClick={toggleForm}>
                    Sign in
                  </a>
                </p>
              </form>
              <a href="/">
                <button className="signup_button2 mt-[20px]">
                  BACK TO HOME
                </button>
              </a>
            </div>
            <div className="imgBx">
              <p className="text-white text-6xl z-20 absolute w-10 m-6 right-6">
                登録
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
