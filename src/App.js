import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./Routes";
import "./assets/scss/custom.css";
import "./assets/scss/jquery.fancybox.min.css";
import "./assets/scss/themebau.min.css";
// import "./assets/scss/themes.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });
  return (
    <React.Fragment>
      <Index />
    </React.Fragment>
  );
}

export default App;
