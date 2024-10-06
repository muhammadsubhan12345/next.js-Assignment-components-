import Image from "next/image";
import React from "react";
import Header from "./components/header";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}

      <nav>
        <Header />
        <p>
          <b>-------------------------------------</b>
        </p>
        <About />
      </nav>
    </div>
  );
}
