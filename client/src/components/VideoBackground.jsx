import React, { useEffect, useState } from "react";

const VideoBackground = () => {



  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [screenheight, setScreenheight] = useState(window.innerHeight);

  // const calHeight = screenWidth / 16 * 9;
  // console.log(screenWidth);
  // console.log(screenheight);
  // console.log(calHeight);

  console.log("hello wworld")

  // useEffect(() => {

  // }, []);

  return (
    <div className="border border-red-600 relative h-[50vh] overflow-hidden">
      <div className="absolute w-screen -top-[50%]">
        <iframe
          className="w-full aspect-video "
          src="https://www.youtube.com/embed/eGKWS6_187s?autoplay=1&loop=1&playlist=eGKWS6_187s&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  );
};

export default VideoBackground;
