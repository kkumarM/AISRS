import React, { Component } from "react";
import Header from "./components/common/header";
import Configuration from "./components/Configuration";
import "./App.css";
import Footer from "./components/common/footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Configuration />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
