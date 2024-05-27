import React from "react";
import Header from "../Header/Header";
import FileSearch from "../FileSearch/FileSearch";
import AudioPlayer from "../Player/AudioPlayer/AudioPlayer";
import Favorite from "../PlayList/Favorite";
import Song from "../PlayList/Song";
import AudioBar from "../Player/AudioBar/AudioBar";

export const Container = () => {
  return (
    <div>
      <div className="mb-5">
      <Header showLogout={true} />
        <FileSearch />
        <AudioPlayer />
        <Favorite />
        <Song />
        <div>
          <AudioBar />
        </div>
      </div>
    </div>
  );
};
