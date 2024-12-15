import { data } from "../constants/contents";
import Button from "../ui/Button";

const Content = () => {
  return (
    <section className="conatainer_wraper ">
      <div className="mt-20 md:mt-[100px]">
        {data.map((item) => {
          return (
            <div key={item.id} className=" flex flex-col md:flex-row justify-center  md:justify-between items-center mb-20">
              <aside className=" w-full md:w-[40%]  mb-10 md:mb-0">
                <img src={item.src} alt="content img" className=" mx-auto md:mx-0" />
              </aside>

              <article className=" w-full md:w-[50%]">
                <h4 className="title-content mb-4">{item.title}</h4>
                <p className=" all_text mb-2">{item.text1}</p>
                <p className=" all_text mb-2">{item.text2}</p>
                {item.id == 3 ? <Button size={150} children={"Purchase Now"} /> : null}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
