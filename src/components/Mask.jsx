import { useEffect } from "react";
import { maskIcon } from "../assets/icons";
import { maskImage } from "../assets/img";
import { maskText, maskTitle, text1, text2, title } from "../constants/contents";

import Aos from "aos";
import "aos/dist/aos.css";
const Mask = ({ setIsHome }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  setIsHome(false);
  return (
    <section className="conatainer_wraper">
      <div className=" flex flex-col md:flex-row gap-10 md:gap-0 justify-between mt-12 md:mt-24  items-center">
        <article className=" w-full md:w-[50%] flex flex-col gap-10" data-aos="fade-right">
          <div>
            <h3 className="title-content mb-4">{title}</h3>
            <p className="text-content mb-3">{text1}</p>
            <p className=" text-content ">{text2}</p>
          </div>

          <div className=" flex-col gap-5 md:gap-0 md:flex-row  flex justify-between items-center ">
            <div className=" flex flex-col gap-2">
              <img src={maskIcon} alt="mask icon" loading="lazy" width={36} height={36} />
              <h4 className=" font-medium  text-[16px]">{maskTitle}</h4>
              <p className="mask-text">{maskText}</p>
            </div>
            <div className=" flex flex-col gap-2">
              <img src={maskIcon} alt="mask icon" loading="lazy" width={36} height={36} />
              <h4 className=" font-medium  text-[16px]">{maskTitle}</h4>
              <p className="mask-text">{maskText}</p>
            </div>
          </div>
        </article>

        <aside className="  w-full md:w-[50%]" data-aos="fade-left">
          <img className=" w-full object-cover " src={maskImage} alt="mask image" loading="lazy" />
        </aside>
      </div>
    </section>
  );
};

export default Mask;
