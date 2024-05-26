import React,{useState} from "react";
import radioParadiswe from "../radioParadiswe.jpeg";
import tamilsong from "../tamilsong.mp3"
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css'


const AudioPlayer = () => {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);

  // const handleListen = (e) => {
  //   setCurrentTime(e.target.currentTime);
  //   setDuration(e.target.duration);
  // };
  return (
    <div className="container">
    <div className="row mb-4" >
      <img
        src={radioParadiswe}
        alt="QnA_head"
        id="QnA_head"
        className="music-icon mx-auto d-block "
        // style={{ width: "200px" }}
      />
    </div>
    <div className="row d-flex justify-content-center mb-5">
      {/* <div className="container"> */}
    <ReactAudioPlayer
      src={tamilsong}
      controls
      className=""
      id='Audio_player'
      // style={{ width: "50%" }}
      // autoPlay
      // onListen={handleListen}
    />
    {/* </div> */}
    {/* <p>Current Time: {currentTime.toFixed(2)}</p>
      <p>Total Duration: {duration.toFixed(2)}</p> */}
    </div>
  </div>
  );
};

export default AudioPlayer;
