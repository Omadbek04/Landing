import Button from "../ui/Button";

const Price = () => {
  return (
    <div className=" overflow-hidden">
      <section className=" price flex items-center">
        <div className="conatainer_wraper ">
          <h2 className="price-title mb-4">A Price To Suit Everyone</h2>
          <p className="price-text mb-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
         
          <span className=" text-[40px] font-medium text-text-color block text-center">$40</span>
          <span className=" text-[16px] text-center block text-text-color mb-14">Ui desigin kit</span>
          <p className=" text-gray-500  text-center mb-3">See, One price. Simple.</p>
          <div className=" flex justify-center">
          <Button size={200}>Purchase Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
