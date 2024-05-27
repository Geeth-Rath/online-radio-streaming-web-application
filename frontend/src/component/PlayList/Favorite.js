import React, { useState } from "react";

const Favorite = () => {
  const [isRed, setIsRed] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="container">
      {" "}
      <div className="row">
        <div className="col d-flex justify-content-start">
          <h5 className="fw-bold">Favorite</h5>
        </div>
      </div>
      <div className="row ">
        <hr />
      </div>
      <div className="row pt-2 pb-2 ">
        <div className="col d-flex align-item-right">
          <span>Heel the world</span>
        </div>
        <div className="col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={isRed ? "red" : "white"}
            class="bi bi-heart-fill cursor"
            viewBox="0 0 16 16"
            onClick={toggleColor}
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        </div>
        <div className="col-1">
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="Green"
              className="bi bi-pause-circle-fill cursor"
              viewBox="0 0 16 16"
              onClick={togglePlayPause}
              style={{ cursor: "pointer" }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="Green"
              className="bi bi-play-circle-fill cursor"
              viewBox="0 0 16 16"
              onClick={togglePlayPause}
              style={{ cursor: "pointer" }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
            </svg>
          )}
        </div>
        <div className="col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="yellow"
            class="bi bi-pencil-fill cursor"
            viewBox="0 0 16 16"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
        </div>
        <div className="col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="blue"
            class="bi bi-archive-fill cursor"
            viewBox="0 0 16 16"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          >
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
          </svg>
        </div>
      </div>
      {/* ---------------------MODAL---------------------------- */}
      <div
        className="modal fade "
        id="exampleModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content" id="customModal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Radio Station
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group  mt-4">
                  <label
                    for="formGroupExampleInput"
                    className="d-flex fw-bold mb-1 "
                  >
                    Programme
                  </label>
                  <input
                    name="programme"
                    type="text"
                    class="form-control "
                    id="formGroupExampleInput"
                    placeholder="Utopia"
                  />
                </div>
                <div class="form-group  mt-4">
                  <label
                    for="formGroupExampleInput2"
                    className="d-flex fw-bold mb-1"
                  >
                    Radio Station{" "}
                  </label>
                  <input
                    name="radioStation"
                    type="text"
                    class="form-control fws-bold"
                    id="formGroupExampleInput2"
                    placeholder="Freshco Fm"
                  />
                </div>
                <div class="form-group mt-4"></div>
                <div class="form-group  mt-4">
                  <label
                    for="formGroupExampleInput2"
                    className="d-flex fw-bold mb-1"
                  >
                    Radio Url{" "}
                  </label>
                  <input
                    name="radioStation"
                    type="url"
                    class="form-control fws-bold"
                    id="formGroupExampleInput2"
                    placeholder="htttp://radio.com"
                  />
                </div>
                <div class="form-group  mt-4">
                  <label
                    for="formGroupExampleInput2 "
                    className="d-flex fw-bold mb-1 "
                  >
                    {" "}
                    Radio Image{" "}
                  </label>
                  <div class="input-group mb-3 d-flex justify-content-between ">
                    <div class="custom-file  mb-4  rounded d-flex justify-content-between">
                      <input
                        type="file"
                        class=" form-control custom-file-input "
                        id="inputGroupFile02"
                        accept="image/*"
                      />
                    </div>
                    <div class="input-group-append">
                      <button type="button" class="btn btn-primary ">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
