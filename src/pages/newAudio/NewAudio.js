import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addNewAudio } from "../../store/AudiosReducer";
import Input from "../../coponents/input/Input";
import Button from "../../coponents/button/Button";
import LoadingSpinner from "../../coponents/loadingSpinner/LoadingSpinner";
import { addAudioToLocalStorage } from "../../store/AudiosReducer";
import StyledPlaceForm from "./NewAudioStyle";

const NewAudio = () => {
  const history = useHistory();
  const isLoading = useSelector((state) => state.isLoading);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const artistChange = (event) => {
    setArtist(event.target.value);
  };
  const lengthChange = (event) => {
    if (typeof event.target.value === "number") {
      setLength(event.target.value * 1000 * 60);
    } else {
      setLength(0);
    }
  };

  const audioSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addNewAudio({
        strTrack: title,
        strArtist: artist,
        intDuration: length + "",
        idTrack: Date.now() + "",
      })
    );
    dispatch(addAudioToLocalStorage());
    history.push(`/`);
  };

  return (
    <React.Fragment>
      <StyledPlaceForm onSubmit={audioSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          onChange={titleChange}
        />
        <Input
          id="artist"
          element="input"
          label="artist"
          onChange={artistChange}
        />
        <Input
          id="length"
          element="input"
          type="text"
          label="length(in minutes)"
          onChange={lengthChange}
        />
        <Button type="submit">ADD AUDIO</Button>
      </StyledPlaceForm>
    </React.Fragment>
  );
};

export default NewAudio;
