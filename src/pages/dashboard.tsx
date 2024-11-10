import React from "react";
import Prompt from "../components/Prompt";
import Tweets from "../components/Tweets";

const Home = () => {
  return (
    <div className="w-[screen] pt-28 xl:pt-36 p-16 flex justify-center lg:text-body-lg">
      <div className="w-full l:w-[40%] xl:w-[45%] space-y-8">
        <Prompt />
        <Tweets />
      </div>
    </div>
  );
};

export default Home;
