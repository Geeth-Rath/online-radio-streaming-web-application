import React from "react";
import radioParadiswe from "../radioParadiswe.jpeg";
import "./AudioBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentRadio,
  togglePlayPause,
  setNextRadio,
  setPreviousRadio,
} from "../../../Redux/actions/radioActions";

const AudioBar = () => {
  const dispatch = useDispatch();

  const currentRadio = useSelector((state) => state.radio.currentRadio);

  const isPlaying = useSelector((state) => state.radio.isPlaying);

  const handlePlayPause = () => {
    if (currentRadio.id) {
      dispatch(togglePlayPause());
    } else {
      dispatch(setCurrentRadio(currentRadio));
      dispatch(togglePlayPause());
    }
  };

  const handleNext = () => {
    if (currentRadio.id) {
      dispatch(setNextRadio());
      if (!isPlaying) {
        dispatch(togglePlayPause());
      }
    }
  };

  const handlePrevious = () => {
    if (currentRadio.id) {
      dispatch(setPreviousRadio());
      if (!isPlaying) {
        dispatch(togglePlayPause());
      }
    }
  };

  return (
    <div className="fixed-bottom container rounded">
      <div className="row  d-flex justify-content-center align-items-baseline ">
        <div className="col-auto audio-bar d-flex justify-content-center align-items-center p-3 rounded ">
          <div className="col-auto d-none d-md-block">
            <img
              src={currentRadio?.imageUrl || radioParadiswe}
              alt="QnA_head"
              id="QnA_head"
              className="mx-auto d-block "
              style={{ width: "50px" }}
            />
          </div>
          <div className="col-sm-auto d-flex justify-content-center align-items-center mx-2 ">
            <span className="mx-2 fw-bold">
              {currentRadio ? currentRadio.programme : "------"}
            </span>
            <span className="mx-2"> By</span>
            <span className="fw-bold fst-italic mx-2">
              {currentRadio ? currentRadio.radioStation : "------"}
            </span>
          </div>         
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-caret-left-fill cursor "
              viewBox="0 0 16 16"
              onClick={handlePrevious}
              style={{
                pointerEvents: !currentRadio ? "none" : "auto",
                opacity: !currentRadio ? 0.5 : 1,
              }}
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </div>
          <div className={`col-auto ${!currentRadio ? "disabled" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-caret-right-fill cursor mx-2 "
              viewBox="0 0 16 16"
              onClick={handleNext}
              style={{
                pointerEvents: !currentRadio ? "none" : "auto",
                opacity: !currentRadio ? 0.5 : 1,
              }}
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>

          <div className="col-auto">
            {isPlaying && currentRadio.id ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-pause-fill cursor mx-2"
                viewBox="0 0 16 16"
                onClick={() => handlePlayPause()}
                style={{
                  pointerEvents: !currentRadio ? "none" : "auto",
                  opacity: !currentRadio ? 0.5 : 1,
                }}
              >
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-square-fill cursor mx-2"
                viewBox="0 0 16 16"
                onClick={() => handlePlayPause()}
                style={{
                  pointerEvents: !currentRadio ? "none" : "auto",
                  opacity: !currentRadio ? 0.5 : 1,
                }}
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBar;
