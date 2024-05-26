import React from "react";
import "./FileSearch.css";

function FileSearch() {
  return (
    <div className="container p-4 mb-4 rounded-3 ">
      <div className="row ">
        <div className="col d-none d-sm-flex justify-content-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="red"
            class="bi bi-file-earmark-plus-fill cursor"
            viewBox="0 0 16 16"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
          </svg>
        </div>

        <div className="col-auto   d-none d-sm-flex d-flex  align-items-center  input-search rounded-5">
          <input
            class="form-control input-search fst-italic mx-2"
            type="text"
            aria-label="default input example"
            placeholder="Search..."
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
            }}
            //  value={searchText}
            //  onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="blue"
            class="bi bi-send-arrow-up-fill cursor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"
            />
            <path
              fill-rule="evenodd"
              d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"
            />
          </svg>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto d-block d-sm-none d-flex align-items-center input-search rounded-5">
            <input
              class="form-control input-search mx-2"
              type="text"
              aria-label="default input example"
              placeholder="Search..."
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
              }}
              //  value={searchText}
              //  onChange={handleInputChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="blue"
              class="bi bi-send-arrow-up-fill cursor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"
              />
              <path
                fill-rule="evenodd"
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* ---------------------MODAL---------------------------- */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content" id="customModal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Song
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
                    Title
                  </label>
                  <input
                    name="title"
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
                    Artist{" "}
                  </label>
                  <input
                    name="artist"
                    type="text"
                    class="form-control fws-bold"
                    id="formGroupExampleInput2"
                    placeholder="Travis Scott"
                  />
                </div>
                <div class="form-group mt-4">
                  <label
                    for="formGroupExampleInput2 "
                    className="d-flex fw-bold mb-1"
                  >
                    Genre{" "}
                  </label>
                  <select
                    class="form-select form-select mb-3 rounded"
                    aria-label="Default select example"
                    // value={category}
                    style={{ width: "100%", marginBottom: "10px" }}
                    // onChange={(value) => setCategory(value.target.value)}
                  >
                    <option selected value="Rock">
                      Rock
                    </option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Country">Country</option>
                  </select>
                </div>

                <div class="input-group mb-3 mt-5  rounded d-flex justify-content-between ">
                  <div class="custom-file  mb-4 ">
                    <input
                      type="file"
                      class=" form-control custom-file-input "
                      id="inputGroupFile02"
                      accept="audio/*"
                    />
                  </div>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary ">
                      Upload
                    </button>
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
}

export default FileSearch;
