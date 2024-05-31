import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../Rating/StarRating";
import {
  fetchRadios,
  deleteRadio,
  updateRadio,
  getRadioById,
  setCurrentRadio,
  togglePlayPause,
} from "../../Redux/actions/radioActions";

const Stations = ({ id }) => {
  const dispatch = useDispatch();
  const radios = useSelector((state) => state.radio.radios);
  const searchTerm = useSelector((state) => state.radio.searchTerm);
  const searchradios = useSelector((state) => state.radio.filteredSearchRadios);
  const radio = useSelector((state) => state.radio.radio);
  const userId = useSelector((state) => state.auth.userId);
  const isPlaying = useSelector((state) => state.radio.isPlaying);
  const currentRadio = useSelector((state) => state.radio.currentRadio);

  const [radioToDelete, setRadioToDelete] = useState(null);
  const [UpdateRadioId, setUpdateRadioId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    programme: "",
    radioStation: "",
    radioUrl: "",
    imageUrl: "",
    favorite: "",
    rate: 0,
  });

  useEffect(() => {
    dispatch(fetchRadios(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (radio) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: radio.id,
        programme: radio.programme,
        radioStation: radio.radioStation,
        radioUrl: radio.radioUrl,
        imageUrl: radio.imageUrl,
        favorite: radio.favorite,
        rate: radio.rate,
      }));
    }
  }, [radio]);

  const handleDeleteClick = (radioId) => {
    setRadioToDelete(radioId);
  };

  const handleDeleteConfirmation = () => {
    if (radioToDelete) {
      dispatch(deleteRadio(radioToDelete));
      setRadioToDelete(null);
      window.location.reload();
    }
  };

  const handleSelectedRadioId = (radioId) => {
    setUpdateRadioId(radioId);
    dispatch(getRadioById(radioId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRadio(UpdateRadioId, formData));
    window.location.reload();
  };

  const handleToggleFavorite = (radioId, fav) => {
    const currentRadio = radios.find((radio) => radio.id === radioId);
    if (currentRadio) {
      const updatedFavorite = !fav;
      const updatedFormData = {
        ...currentRadio,
        favorite: updatedFavorite,
      };
      setFormData(updatedFormData);
      dispatch(updateRadio(radioId, updatedFormData));
      window.location.reload();
    }
  };

  const handlePlayPause = (currentRadio) => {
    if (radio && radio.id === currentRadio.id) {
      dispatch(togglePlayPause());
    } else {
      dispatch(setCurrentRadio(currentRadio));
      dispatch(togglePlayPause());
    }
  };

  return (
    <div className="container pt-5 pb-4">
      <div className="row d-flex align-items-baseline">
        <div className="col-auto d-flex justify-content-start align-items-center">
          <h5 className="fw-bold">Stations </h5>
        </div>
        <div className="col d-block d-sm-none d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-file-earmark-plus-fill cursor"
            viewBox="0 0 16 16"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </div>
      <div className="row ">
        <hr />
      </div>
      {searchTerm
        ? searchradios.map((radio) => (
            <div className="row pt-3 ">
              <div key={radio.id} className="col d-flex align-item-right">
                <span>{radio.radioStation}</span>
              </div>
              <div className="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill={radio.favorite ? "red" : "white"}
                  class="bi bi-heart-fill cursor"
                  viewBox="0 0 16 16"
                  onClick={() => handleToggleFavorite(radio.id, radio.favorite)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </div>

              <div className="col-1">
                {isPlaying && currentRadio.id == radio.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="Green"
                    className="bi bi-pause-circle-fill cursor"
                    viewBox="0 0 16 16"
                    onClick={() => handlePlayPause(radio)}
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
                    onClick={() => handlePlayPause(radio)}
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
                  onClick={() => handleSelectedRadioId(radio.id)}
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
                  onClick={() => handleDeleteClick(radio.id)}
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
              </div>

              <div className="row ">
                <StarRating radio={radio} />
              </div>
            </div>
          ))
        : radios.map((radio) => (
            <div className="row pt-3 ">
              <div key={radio.id} className="col d-flex align-item-right">
                <span>{radio.radioStation}</span>
              </div>
              <div className="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill={radio.favorite ? "red" : "white"}
                  class="bi bi-heart-fill cursor"
                  viewBox="0 0 16 16"
                  onClick={() => handleToggleFavorite(radio.id, radio.favorite)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </div>

              <div className="col-1">
                {isPlaying && currentRadio.id == radio.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="Green"
                    className="bi bi-pause-circle-fill cursor"
                    viewBox="0 0 16 16"
                    onClick={() => handlePlayPause(radio)}
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
                    onClick={() => handlePlayPause(radio)}
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
                  data-bs-target="#exampleModal6"
                  onClick={() => handleSelectedRadioId(radio.id)}
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
                  data-bs-target="#exampleModal8"
                  onClick={() => handleDeleteClick(radio.id)}
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
              </div>

              <div className="row ">
                <StarRating radio={radio} />
              </div>
            </div>
          ))}

      {/* ---------------------MODAL-UPDATE---------------------------- */}
      <div
        className="modal fade "
        id="exampleModal6"
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
                    for="formGroupExampleInput2"
                    className="d-flex fw-bold mb-1"
                  >
                    Radio Image{" "}
                  </label>
                  <input
                    name="imageUrl"
                    type="url"
                    class="form-control fws-bold"
                    id="formGroupExampleInput10"
                    aria-describedby="inputGroupPrepend"
                    placeholder="htttp://image.com"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                  />
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

      {/* ----------------------------------MODAL- DELETE------------------------ */}

      <div
        className="modal fade"
        id="exampleModal8"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content pt-4" id="customModal">
            <div className="modal-body">
              {radioToDelete && <h5>Do you want to delete the Station ?</h5>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDeleteConfirmation}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stations;
