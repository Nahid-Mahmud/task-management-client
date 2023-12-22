import { NavLink } from "react-router-dom";

const DrawerItem = ({ pathName, itemName }) => {
  return (
    <NavLink
      to={pathName}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "border-b-2 hover:bg-black bg-slate-600 text-white  border-orange-300  font-semibold "
          : ""
      }
    >
      {itemName}
    </NavLink>
  );
};

export default DrawerItem;
