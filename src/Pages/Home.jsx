import React from "react";
import Banner from "./Banner";
import { useAuth } from "../Hooks/UseAuth";
import Todo from "./Todo";

const Home = () => {
  const { user, loading } = useAuth();
  return (
    <div>
      {!user && <Banner />}
     {user &&  <Todo />}
    </div>
  );
};

export default Home;
