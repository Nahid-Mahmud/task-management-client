import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/axiosPublic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import GoogleLogin from "../../Shared/GoogleLogin";

const SignUp = () => {
  const { emailPassSignup } = useAuth();
  const navigate = useNavigate();
  // console.log(emailPassSignup);

  // react hook form
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const [signInUpErr, setSignInUpErr] = useState("");

  // handle on submint

  const onSubmit = (formData) => {
    setSignInUpErr("");
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const photourl = formData.photourl;
    const badge = "bronze";

    // password validation

    if (!/^.{6,}$/.test(password)) {
      setSignInUpErr(`Must have at least 6 characters`);
      return;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setSignInUpErr(`Must have at least 1 capital letter`);
      return;
    } else if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~])\S+$/.test(password)) {
      setSignInUpErr(`Must have at least 1 special character`);
      return;
    }

    // email bassword login
    emailPassSignup(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            console.log("User Updated", currentUser);
          })
          .catch((err) => {
            console.log(err);
          });
        if (currentUser) {
          toast(" Sign Up Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
          //   e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        setSignInUpErr(err.message);
      });

    console.log(name, email, password, photourl, badge);
  };

  return (
    <div className="hero min-h-screen ">
      <div className="w-full  max-w-md ">
        <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form
            // onSubmit={handleForm}
            onSubmit={handleSubmit(onSubmit)}
            className="pb-6"
          >
            <p className="text-center text-white text-3xl font-semibold underline py-5">
              Create Your Account
            </p>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Your Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="name"
                placeholder="Jhon Doe"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Image Url
              </label>
              <input
                {...register("photourl", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="photourl"
                type="text"
                name="photourl"
                placeholder="https://example.png"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
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
                {/* {userSignUpError} */}
                {signInUpErr}
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <input
                className="btn  bg-green-500 text-white hover:text-black hover:bg-green-600 transition"
                type="submit"
                value="Sign Up"
              />
              <p className="inline-block align-baseline font-bold  ">
                Have an account?{" "}
                <Link
                  className="text-blue-700 hover:text-blue-800"
                  to={"/login"}
                >
                  Log In
                </Link>{" "}
                here
              </p>
            </div>
          </form>
          {/* <p className="text-2xl font-medium ">
              Connect with Social Network!
            </p> */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              //   onClick={handleGoogleLogin}
              className="text-center py-7 "
            >
              <GoogleLogin
                setSignInUpErr={setSignInUpErr}
                text="Sign Up With Google "
              ></GoogleLogin>
            </div>
            <Link to={"/"}>
              <button className="btn bg-green-600 hover:bg-green-700 text-white  hover:text-black">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
