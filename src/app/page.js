"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef();
  const [adPlaying, setAdPlaying] = useState(false);
  var count = 1;

  const switchVideoSource = () => {
    if (videoRef) {
      count += 1;
      if (count > 7) {
        count = 1;
      }
      console.log("JODDD", count);
      const video = videoRef.current;
      video.src = `assets/videos/Video${count}.mp4`;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    video.src = "assets/videos/Video1.mp4";
    video.play();

    const switchTimer = setInterval(switchVideoSource, 10000); // Switch video source after 10 seconds

    return () => {
      clearInterval(switchTimer);
    };
  }, []);

  return (
    <main className="h-full">
      <video
        ref={videoRef}
        autoplay="true"
        muted
        playsinline
        loop="true"
        className="absolute inset-0 w-[100%] h-[100%]"
      ></video>
      <div></div>
    </main>
  );
}
