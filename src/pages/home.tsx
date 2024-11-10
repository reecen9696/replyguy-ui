"use client"; // Mark the component as a Client Component
import ReplyGuy from "../assets/images/replyguy.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Correctly use the hook to create a navigate function

  return (
    <main className="pt-16 p-4 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-h3-sm lg:text-h3-lg">
        we reply <br /> so you can touch grass
      </h1>
      <button
        className="bg-black w-48 text-white h-10 mt-8"
        onClick={() => navigate("/login")} // Correctly use the navigate function
      >
        ok
      </button>
      <img
        src={ReplyGuy}
        alt="reply guy dude"
        className="fixed bottom-0 h-[30%] lg:h-100"
      />
    </main>
  );
};

export default Home;
