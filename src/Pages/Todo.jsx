import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/axiosPublic";

const Todo = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: todoData, refetch } = useQuery({
    queryKey: "todos",
    queryFn: async () => {
      const res = await axiosPublic.get(`/todos/${user?.email}`);
      return res.data;
    },
    enabled: !!user && !loading,
  });

  console.log(todoData);

  // console.log(loading);
  const handleForm = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const email = user?.email;
    const mark = "todo";
    axiosPublic.post("/addTodo", { email, task, mark }).then((res) => {
      console.log(res.data);
    });
    console.log("hello, ", email, task);
  };
  return (
    <div>
      {!loading && (
        <p className="text-center  text-3xl font-bold underline   ">
          {" "}
          Welcome {user?.displayName}{" "}
        </p>
      )}
      <form
        onSubmit={handleForm}
        className="flex my-4 justify-center  flex-col gap-3  "
      >
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="">Add a Task !</label>
            <input
              type="text"
              placeholder="Type here"
              name="task"
              required={true}
              className="input input-bordered input-lg w-full max-w-xs"
            />
          </div>
        </div>
        <input type="submit" className="btn w-fit mx-auto" value="Add" />
      </form>

      <div className="grid grid-cols-3 gap-5">
        <div className="  lg:min-h-[70vh]  border-4">
          {" "}
          <p className="text-center mt-3 font-medium text-2xl"> TO-DO </p>{" "}
        </div>
        <div className="  lg:min-h-[70vh]  border-4">
          {" "}
          <p className="text-center mt-3 font-medium text-2xl">
            {" "}
            On Going{" "}
          </p>{" "}
        </div>
        <div className="  lg:min-h-[70vh]  border-4">
          {" "}
          <p className="text-center mt-3 font-medium text-2xl">
            {" "}
            Finished
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Todo;
