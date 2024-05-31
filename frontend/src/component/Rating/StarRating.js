import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const StarRating = () => {

  const dispatch = useDispatch();
  const radios = useSelector((state) => state.radio.radios);
  console.log("all:", radios)
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="col d-flex justify-content-start">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: "none" }} // hide the radio buttons
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "gray"}
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(ratingValue)}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </label>
        );
      })}
      <p className="mx-2 fst-italic fs-6">{rating} points</p>

      {/* ----------------------------------MODAL------------------------- */}

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content" id="customModal">
            <div className="modal-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-star-fill mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <p className="mx-2 fst-italic fs-6">{rating} points</p>

              <h3 className="" id="exampleModalLabel">
                Submitted
              </h3>

              <h6>Thanks for your feedback.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
