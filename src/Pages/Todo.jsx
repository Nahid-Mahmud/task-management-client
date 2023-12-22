import React from "react";

const Todo = () => {
  return (
    <div>
      <form className="flex my-4 justify-center  flex-col gap-3  ">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="">Add a Task !</label>
            <input
              type="text"
              placeholder="Type here"
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
