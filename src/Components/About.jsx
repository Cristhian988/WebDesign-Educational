// import React from 'react'
import { Link } from "react-scroll";
import about from "../assets/about.svg";
import Button from "../Layout/Button";
import Heading from "../Layout/Heading";

export default function About() {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-14 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={about} alt="img" />
      </div>
      <div className="w-full md:w-2/4 text-center space-y-8">
        <Heading title1="About" title2="Us?" />
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
}
