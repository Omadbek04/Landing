import { Home, Mask, Navbar } from "./components";

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
    </>
  );
};

export default App;
