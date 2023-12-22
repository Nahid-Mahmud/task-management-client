import Banner from "./Banner";
import { useAuth } from "../Hooks/UseAuth";
import Todo from "./Todo";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="items-center justify-center flex min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );

  return (
    <div>
      {user && <Todo />}
      {!user && <Banner />}
    </div>
  );
};

export default Home;
