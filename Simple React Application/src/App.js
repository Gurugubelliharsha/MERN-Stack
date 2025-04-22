
/*
import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header title="Welcome to My React App 🚀" />
      <Profile 
        name="Gurugubelli Harsha" 
        hometown="Srikakulam" 
      />
      <Footer />
    </div>
  );
};

export default App;

*/
import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css"; // Import updated styles

const App = () => {
  return (
    <div className="container">
      <Header title="Welcome to My React App " />
      <Profile name="Gurugubelli Harsha" hometown="Srikakulam" />
      <Footer />
    </div>
  );
};

export default App;
