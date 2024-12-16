import { useEffect } from "react";
import { facebok, instagram, linkedin, Logo, twiter, youtube } from "../assets/icons";
import Button from "../ui/Button";

import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
useEffect(() => {
  Aos.init({ duration: 1000 });
});
  return (
    <footer className=" bg-footer-bg pt-[62px] pb-[30px]">
      <div className="conatainer_wraper" data-aos="zoom-in-down">
        <div className=" flex items-center justify-between  pb-8 mb-8 border-b border-b-text-color flex-col md:flex-row gap-4">
          <p className=" text-gray-500">©{new Date().getFullYear()} Yourcompany</p>
          <img src={Logo} alt=" logo" />
          <Button size={109} children={"Purchase now"} />
        </div>
        <div className=" flex justify-between items-center flex-col md:flex-row gap-6">
          <div className=" flex items-center justify-center   gap-8 h-full text-[16px] text-text-color  font-normal leading-6">
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
          </div>
          <div className=" flex items-center gap-3 justify-between">
            <a href="/#" target="_blank">
              <img width={20} height={20} src={facebok} alt="facebok" />
            </a>
            <a href="/#" target="_blank">
              <img width={20} height={20} src={twiter} alt="twiter" />
            </a>
            <a href="/#" target="_blank">
              <img width={20} height={20} src={linkedin} alt="linkedin" />
            </a>
            <a href="/#" target="_blank">
              <img width={20} height={20} src={youtube} alt="youtube" />
            </a>
            <a href="/#" target="_blank">
              <img width={20} height={20} src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
