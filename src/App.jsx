import { Content, Footer, Home, Mask, Navbar, Price } from "./components";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="bg-hero"></div>
        <div className="conatainer_wraper">
          <Navbar />
          <Home />
        </div>
      </header>
      <Mask />
      <Content />
      <Price/>
      <Footer/>
    </>
  );
};

export default App;
