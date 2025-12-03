import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "./CreateContext";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation()
  
  const { loginUser, googleLogin, resetPass } = useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef(null)
  const navigate = useNavigate();
  const handleLoginUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        setError("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleLoginBtn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Login Success");
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  const resetBtn = ()=>{
    const resetEmail = emailRef.current.value
    resetPass(resetEmail)
      .then(() => {
    toast.success(`Password reset email send to ${resetEmail} this email `)
    window.location.href = "https://mail.google.com/";
    

  })
  .catch((error) => {
    
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLoginUser}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                ref={emailRef}
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <button onClick={resetBtn} type="button" className="link link-hover">Forgot password?</button>
              </div>
              <button type="submit"  className="btn btn-neutral mt-4">
                Login
              </button>
              <div className="flex">
                <p>Goto </p>{" "}
                <Link to={"/register"} className="text-blue-900 underline">
                  Register
                </Link>
              </div>
              {/* {error && <p className="text-red-500">{error}</p>} */}
            </fieldset>
          </form>

          <div className="divider">OR</div>
          <button
            onClick={googleLoginBtn}
            className="btn bg-amber-100 text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
