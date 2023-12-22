import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../../Hooks/UseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import GoogleLogin from "../../Shared/GoogleLogin";
import { auth } from "../../Firebase/Firebase.config";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const [signInUpErr, setSignInUpErr] = useState("");
  const { emailPassLogin } = useAuth();
  // console.log(emailPassLogin);

  const onSubmit = (formData) => {
    setSignInUpErr("");
    console.log(formData);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        console.log("signupsuccess", res.user);
        const currentUser = res.user;
        if (currentUser) {
          toast(" Sign In Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setSignInUpErr(err.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="w-full bg-slate-700  max-w-md ">
        <div className=" bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit(onSubmit)} className="pb-6">
            <p className="text-center text-white text-3xl font-semibold underline  py-5">
              Join Us
            </p>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
              <p className="text-red-500 text-xs italic">
                {/* {signInError} */}

                {signInUpErr}
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <input
                className="btn bg-blue-800 text-white hover:bg-blue-900 transition"
                type="submit"
                value="Sign In"
              />
              <p
                className="inline-block align-baseline font-bold capitalize"
                href="#"
              >
                New Here?{" "}
                <Link
                  className="text-blue-700 hover:text-blue-800"
                  to={"/signup"}
                >
                  Sign Up
                </Link>{" "}
               Now!
              </p>
            </div>
          </form>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center py-7 ">
              <GoogleLogin
                setSignInUpErr={setSignInUpErr}
                text="Sign In With Google "
              ></GoogleLogin>
            </div>
            <Link to={"/"}>
              <button className="btn bg-blue-800 text-white hover:bg-blue-900  hover:text-white">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
