import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import DrawerItem from "../../Shared/DrawerItem";
import { useAuth } from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  // console.log("User Is admin?", isAdmin);
  const { user, loading, signoutUser } = useAuth();

  const handleLogout = () => {
    // console.log("logout");
    signoutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Logout Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log("signout user successfully");
      })
      .catch((err) => {
        // console.log("signout user error", err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-10 flex flex-col">
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden mb-5"
            >
              <FaBars className="text-3xl cursor-pointer" />
            </label>
            {/* Page content here */}

            <Outlet />
            <ToastContainer />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-3 text-base-content">
              <li>
                <DrawerItem itemName={"Home"} pathName={"/"} />
              </li>
              {!user && (
                <li>
                  <DrawerItem itemName={"Login"} pathName={"/logIn"} />
                </li>
              )}
              {user && (
                <li>
                  <button className="Btn" onClick={handleLogout}>
                    {" "}
                    Logout{" "}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
