import React from "react";

const VideoSection = () => {
    return (
        <>
            <div class="pointer-events-none  overflow-hidden -mt-[80vh]">
                <iframe
                    class="w-full aspect-video"
                    src="https://www.youtube.com/embed/zWZMN9DGuj4?si=XpIZ5znWpzxguDbo&start=2&autoplay=1&loop=1&playlist=zWZMN9DGuj4&controls=0&mute=1&playsinline=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="">
                <iframe
                    class="bg-video"
                    src="https://www.youtube.com/embed/zWZMN9DGuj4?si=XpIZ5znWpzxguDbo&start=2&autoplay=1&loop=1&playlist=zWZMN9DGuj4&controls=0&mute=1&playsinline=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>


        </>


    );
};

export default VideoSection; 
