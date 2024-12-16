// import { Content, Footer, Home, Mask, Navbar, Price } from "./components";

// const App = () => {
//   return (
//     <>
//       <header className="header">
//         <div className="bg-hero"></div>
//         <div className="conatainer_wraper">
//           <Navbar />
//           <Home />
//         </div>
//       </header>
//       <Mask />
//       <Content />
//       <Price/>
//       <Footer/>
//     </>
//   );
// };

// export default App;
import { useState } from "react";
import { Content, Footer, Home, Mask, Navbar, Price } from "./components";

const App = () => {
  const [isHome, setIsHome] = useState(true);

  const goToHome = () => {
    setIsHome(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Sahifani yuqoriga olib chiqadi
  };

  return (
    <>
      <header className="header">
        <div className="bg-hero"></div>
        <div className="conatainer_wraper">
          <Navbar />
          <Home />
        </div>
      </header>
      {!isHome && (
        <button className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow" onClick={goToHome}>
          Back to Home
        </button>
      )}
      <Mask setIsHome={setIsHome} />
      <Content />
      <Price />
      <Footer />
    </>
  );
};

export default App;
