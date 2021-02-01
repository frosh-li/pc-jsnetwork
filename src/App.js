import Header from "./Header";
import Service from "./Service";
import Case from "./Case";
import Workflow from "./Workflow"
import Contact from "./Contact";
import Footer from "./Footer";
import {Fragment} from "react";

function App() {
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
