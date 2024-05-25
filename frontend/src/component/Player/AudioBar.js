import React from "react";
import radioParadiswe from "./radioParadiswe.jpeg";
import "./AudioBar.css";

const AudioBar = () => {
  return (
    <div className="fixed-bottom container rounded">
      <div className="row  d-flex justify-content-center align-items-baseline ">
        <div className="col-auto audio-bar  d-flex d-flex justify-content-center align-items-center p-3 rounded ">
          <div className="col-auto d-none d-md-block">
            {" "}
            <img
              src={radioParadiswe}
              alt="QnA_head"
              id="QnA_head"
              className="mx-auto d-block "
              style={{ width: "50px" }}
            />
          </div>
          <div className="col-sm-auto d-flex justify-content-center align-items-center mx-2 ">
            <span class="mx-2 fw-bold">Rockstar State</span>{" "}
            <span class="mx-2  "> By</span>{" "}
            <span className="fw-bold fst-italic mx-2">Autor Name</span>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-left-fill cursor"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </div>
          <div className="col-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-right-fill cursor mx-2"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>

          <div className="col-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-right-square-fill cursor  mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
            </svg>
          </div>
          <div className="col-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-pause-fill cursor  mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
            </svg>
          </div>
          <div className="col-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height=""
              fill="currentColor"
              class="bi bi-stop-circle-fill cursor  mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBar;
