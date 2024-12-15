import React from "react";
import { hero } from "../assets/img";
import Button from "../ui/Button";

const Home = () => {
  return (
    <section className=" flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-between mt-6 md:mt-20">
      <div className=" w-full md:w-[50%]  pt-[10%] md:pt-[20%]">
        <h3 className=" text-[40px] md:text-[50px] mb-3 md:mb-5">Introduce Your Product Quickly & Effectively</h3>
        <p className="all_text mb-3 md:mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className=" gap-3 flex justify-between">
          <Button size={189}>Purchase UI Kit</Button>
          <button
            className=" border border-text-color rounded-sm text-text-color  py-1 text-center text-[14px] transition-all duration-150
                         hover:bg-btn-bg hover:text-white
                     w-[189px]
                    "
          >
            Learn More
          </button>
        </div>
      </div>
      <div className=" w-full md:w-[50%]">
        <img src={hero} alt="introdact product image" className=" object-cover top-[20%] h-full md:h-[600px]  -right-[-18.74%] left-[68.31%] static md:absolute z-10" />
      </div>
    </section>
  );
};

export default Home;
