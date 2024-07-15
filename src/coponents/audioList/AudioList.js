import React from "react";

import AudioItem from "../audioItem/AudioItem";
import Card from "../card/Card";
import StyledUserList from "./AudioListStyle";

const AudioList = (props) => {
  if (!props.items.length) {
    return (
      <div className="center">
        <Card>
          <h2>No audio found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <StyledUserList>
      {props.items.map((audio) => (
        <AudioItem
          key={audio.idTrack}
          id={audio.idTrack}
          title={audio.strTrack}
          artist={audio.strArtist}
          length={audio.intDuration}
        />
      ))}
    </StyledUserList>
  );
};

export default AudioList;
