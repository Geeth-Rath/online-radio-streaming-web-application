import React, { useEffect } from "react";
import Header from "../Header/Header";
import FileSearch from "../FileSearch/FileSearch";
import AudioPlayer from "../Player/AudioPlayer/AudioPlayer";
import Favorite from "../PlayList/Favorite";
import Stations from "../PlayList/Stations";
import AudioBar from "../Player/AudioBar/AudioBar";
import { useParams } from "react-router-dom";
import { setUserId } from "../../Redux/actions/authActions";
import { useDispatch } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setUserId(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="mb-5">
        <Header showLogout={true} />
        <FileSearch />
        <AudioPlayer />
        <Favorite />
        <Stations />
        <div>
          <AudioBar />
        </div>
      </div>
    </div>
  );
};

export default Container;
