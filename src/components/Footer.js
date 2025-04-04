import React from "react";
import { AVATAR } from "../utils/constants";
import { FaGithub } from "react-icons/fa6";
import { GITHUB, LINKEDIN } from "../utils/constants";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto flex bg-pink-200 p-5 justify-between">
      <div>
        <span className="text-2xl font-semibold text-gray-800">FOODIE</span>
      </div>
      <div className="flex space-x-4">
        <span className="font-semibold text-lg">Created by- Lovendra Kumar</span>
        <img className="w-8 rounded-xl" src={AVATAR} alt="avatar" />
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
