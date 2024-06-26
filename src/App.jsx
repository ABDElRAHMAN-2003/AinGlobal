import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, StarsCanvas,Vision,Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-0 bg-primary'>
          <Navbar />
          <StarsCanvas />
          <Hero />
          <Vision/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
