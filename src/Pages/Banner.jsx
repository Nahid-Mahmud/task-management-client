import React from "react";

const Banner = () => {
  return (
    <div className=" mb-5">
      <div className="flex flex-col-reverse gap-5 lg:gap-0 md:flex-row max-w-[95vw] mx-auto min-h-[90vh]  items-center justify-around">
        <div className="text-center">
          <h1 className="md:text-5xl text-3xl font-bold  max-w-lg">
            {" "}
            Welcome to TaskNexa!
          </h1>
          <p className="py-6 max-w-lg">
            TaskForge is not just another task management tool; it's a dynamic
            platform designed to elevate your productivity and streamline your
            workflow. We believe in the power of efficient task management to
            unlock your full potential, and TaskForge is here to make that
            journey seamless and rewarding.
          </p>
        </div>
        <div>
          <iframe
            className="lg:h-[35rem] lg:w-[35rem]  h-80 "
            src="https://lottie.host/embed/15696a1a-ba0c-4eb5-ac30-168798c5b4d3/0YWWIKw2PH.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
