import React, { useEffect, useRef } from "react";
import radioParadiswe from "../radioParadiswe.jpeg";
import { useSelector } from "react-redux";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const currentRadio = useSelector((state) => state.radio.currentRadio);
  const isPlaying = useSelector((state) => state.radio.isPlaying);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentRadio]);

  return (
    <div className="container">
      <div className="row mb-4">
        <img
          src={radioParadiswe}
          alt="QnA_head"
          id="QnA_head"
          className="music-icon mx-auto d-block "
        />
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <audio
          src={currentRadio?.radioUrl || ""}
          controls
          className=""
          id="Audio_player"
          autoPlay={isPlaying}
          ref={audioRef}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
