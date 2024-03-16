"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef();
  const [adPlaying, setAdPlaying] = useState(false);
  var count = 1;

  useEffect(() => {
    const video = videoRef.current;
    video.src = "assets/videos/Video1.mp4";

    const switchTimer = setTimeout(() => {
      console.log("JODDD DHHDWD");
      if (videoRef) {
        count += 1;
        console.log("JODDD", count);
        const video = videoRef.current;
        video.src = `assets/videos/Video${count}.mp4`;
      }
    }, 10000); // Switch video source after 10 seconds

    return () => {
      clearTimeout(switchTimer);
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
