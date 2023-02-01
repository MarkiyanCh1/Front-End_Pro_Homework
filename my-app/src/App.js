import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { Main } from "./components/Main";

export class App extends React.Component {
   render() {
    return (
    <div className="App">
      <Header />
      <Main />
      <SideNav />
    </div>
    );
  }
}
