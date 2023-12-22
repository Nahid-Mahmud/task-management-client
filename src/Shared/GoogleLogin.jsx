import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useAuth } from "../Hooks/UseAuth";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";

const GoogleLogin = ({ text, setSignInUpErr }) => {
  const navigate = useNavigate();
  const { googleLogIn } = useAuth();
  const handleGoogleLogin = () => {
    setSignInUpErr("");
    googleLogIn()
      .then((result) => {
        if (result) {
          console.log("user found");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Log In successFull",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setSignInUpErr(err.message);
      });
  };
  return (
    <div className="w-fit bg-white  mx-auto">
      <button
        onClick={handleGoogleLogin}
        className="hover:scale-110 transition bg-white items-center text-base flex outline gap-5 px-5 focus:ring-4 focus:outline-none font-medium rounded-lg  py-2.5 text-center dark:bg-blue-600  text-black"
      >
        <FaGoogle className="text-2xl"></FaGoogle> {text}
      </button>
    </div>
  );
};

export default GoogleLogin;
