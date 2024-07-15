import React from "react";

import SingleAudioItem from "../singleAudioItem/SingleAudioItem";
import "./singleAudioList.css";

const SingleAudioList = (props) => {
  return (
    <ul className="place-list">
      {props.items.map((audio) => {
        return (
          <SingleAudioItem
            key={audio.idTrack}
            id={audio.idTrack}
            image={"https://www.svgrepo.com/show/204602/music-player-dvd.svg"}
            artist={audio.strArtist}
            length={audio.intDuration}
            title={audio.strTrack}
            onDelete={props.onDeleteaudio}
          />
        );
      })}
    </ul>
  );
};

export default SingleAudioList;
