import React, {useLayoutEffect} from "react"
import Header from "./Header";
import Service from "./Service";
import Case from "./Case";
import Workflow from "./Workflow"
import Contact from "./Contact";
import Footer from "./Footer";
import {Fragment} from "react";

function App() {
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      console.log('on resize')
      var docWidth = document.documentElement.clientWidth || document.body.clientWidth;
      if(docWidth < 767) {
        document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth) /10 + 'px';
      }else{
        document.getElementsByTagName('html')[0].style.fontSize = "14px"
      }
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Service />
      <Case />
      <Workflow/>
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
