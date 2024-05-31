import React, { useState } from "react";
import "./FileSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { createRadio, searchRadios } from "../../Redux/actions/radioActions";

const FileSearch = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    programme: "",
    radioStation: "",
    radioUrl: "",
    radioImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(e.target.value);
  };

  const handleFormSubmit = () => {
    dispatch(createRadio(userId, formData));
  };

  const handleSearchInput = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    console.log("term", term);
  };

  const handleSearch = () => {
    dispatch(searchRadios(searchTerm));
  };

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
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="blue"
            class="bi bi-send-arrow-up-fill cursor"
            viewBox="0 0 16 16"
            onClick={() => handleSearch()}
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

        {/* <div className="row justify-content-center">
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
          </div> */}
      </div>
      {/* ---------------------MODAL-create---------------------------- */}
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
                Add New Radio Station
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              className="needs-validation"
              novalidate
              onSubmit={handleFormSubmit}
            >
              <div className="modal-body">
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
                    aria-describedby="inputGroupPrepend"
                    placeholder="Utopia"
                    value={formData.programme}
                    onChange={handleInputChange}
                    required
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
                    aria-describedby="inputGroupPrepend"
                    placeholder="Freshco Fm"
                    value={formData.radioStation}
                    onChange={handleInputChange}
                    required
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
                    name="radioUrl"
                    type="url"
                    class="form-control fws-bold"
                    id="formGroupExampleInput3"
                    aria-describedby="inputGroupPrepend"
                    placeholder="htttp://radio.com"
                    value={formData.radioUrl}
                    onChange={handleInputChange}
                    required
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
                  {/* <div class="input-group mb-3 d-flex justify-content-between ">
                      <div class="custom-file  mb-4  rounded d-flex justify-content-between">
                        <input
                          type="file"
                          class=" form-control custom-file-input "
                          id="inputGroupFile02"
                          aria-describedby="inputGroupPrepend"
                          accept="image/*"
                          required
                        />
                      </div>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-primary ">
                          Upload
                        </button>
                      </div>
                    </div> */}
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileSearch;
