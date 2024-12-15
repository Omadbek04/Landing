//export  qilish assets fayilidan, iconlarni
import { useState } from "react";
import { BurgerMenu, Logo } from "../assets/icons";

//export  qilish Ui faylidan Button
import Button from "../ui/Button";
import Modal from "./Modal";

const Navbar = () => {
  // Sidebar ochish va yopish uchun holatni boshqarish
  const [toggle, setToggle] = useState(false);

  // Modalni ochish va yopish uchun holatni boshqarish
  const [isOpen, setIsOpen] = useState(false);

  // openMenu function sidbar ochish uchun
  const openMenu = () => {
    setToggle((prev) => !prev); // Bu sintaksis stateBatchingdi oldini olish uchun
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <nav className=" py-[18px]">
        <div className=" flex justify-between items-center">
          <div className=" hidden md:flex items-center gap-8 text-[14px] text-text-color  font-normal leading-6">
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
          </div>
          <div>
            <img src={Logo} alt="Landing logo" loading="lazy" />
          </div>
          <div className=" flex  items-center gap-3">
            <Button  openModal={openModal} size={160}>
              Buy Now
            </Button>

            {/* burger menu responsive dizayn uchun sidebar ochilishi uchun  */}
            <div className=" block md:hidden cursor-pointer" onClick={() => openMenu()}>
              <img src={BurgerMenu} alt="burger menu" />
            </div>
          </div>
        </div>

        {/* responsive sideb ochilishi */}
        <div className={`${toggle ? " translate-0 " : "translate-x-[100%] "} block md:hidden fixed   z-[99] top-0 right-0 transition-all ease-in duration-500   py-6 px-6 w-full  bg-white h-screen `}>
          {/* sidebarni yopilishi uchun  */}
          <span className=" block text-end text-[25px] cursor-pointer font-semibold " onClick={() => openMenu()}>
            X
          </span>
          <div className=" flex items-center justify-center flex-col gap-8 h-full text-[16px] text-text-color  font-normal leading-6">
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
          </div>
        </div>
      </nav>
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
