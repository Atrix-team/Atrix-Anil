import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWriterComponent = () => {
  return (
    <div className="text-base md:text-6xl text-center ">
      <TypeWriterEffect
        textStyle={{
          fontWeight: "400",
          fontFamily: "REMARK",
          letterSpacing: "0rem",
          fontSize: "inherit",
        }}
        startDelay={500}
        cursorColor="white"
        multiText={[
          "innovative, growing, creative",
          "responsive, modern, intuitive",
          "interactive, secure, powerful",
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
        eraseSpeed={50}
        eraseDelay={2000}
        multiTextLoop={true}
      />
    </div>
  );
};

export default TypeWriterComponent;
