import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GITHUB, LINKEDIN } from "../utils/constants";

const Contact = () => {
  const handleGithubClick = () => {
    window.open(GITHUB, "_blank", "noopener,noreferrer");
  };
  const handleLinkedInClick = () => {
    window.open(LINKEDIN, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-sky-100 h-[529px]">
      <div className="w-6/12 mx-auto text-center">
        <h1 className="text-sky-700 font-bold text-4xl pt-4">Contact Us</h1>
        <div className="pt-4 flex justify-center mb-4">
          <div
            className="flex bg-sky-300 m-4 p-4 rounded-full shadow-xl hover:scale-110 transition duration-2 cursor-pointer"
            onClick={handleGithubClick}
          >
            <h2 className="text-2xl font-bold mx-2">GITHUB</h2>

            <FaGithub size={30} />
          </div>
          <div
            className="flex bg-sky-300 m-4 p-4 rounded-full shadow-xl hover:scale-110 transition duration-2 cursor-pointer"
            onClick={handleLinkedInClick}
          >
            <h2 className="text-2xl font-bold mx-2">LINKEDIN</h2>
            <FaLinkedin size={30} />
          </div>
        </div>
        <span className="text-lg font-semibold pt-4">
          Email📧 - lovendradtu01020@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Contact;
