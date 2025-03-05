import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "inovt, growing, creative",
      "inovt, growing, creative",
      "inovt, growing, creative",
    ],
    loop: 0,
    typeSpeed: 10,
  });

  return (
    <span className="App flex items-center">
      <span>{text}</span>
      <Cursor cursorColor="white" />
    </span>
  );
};

export default TypeWriter;
