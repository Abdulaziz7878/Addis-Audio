import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Input from "../../coponents/input/Input";
import Button from "../../coponents/button/Button";
import Card from "../../coponents/card/Card";
import { updateAudio } from "../../store/AudiosReducer";
import LoadingSpinner from "../../coponents/loadingSpinner/LoadingSpinner";
import { addAudioToLocalStorage } from "../../store/AudiosReducer";
import StyledPlaceForm from "../newAudio/NewAudioStyle";

const UpdateAudio = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const loadedAudios = useSelector((state) => state.loadedAudios);

  const audioId = useParams().audioId;
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const artistChange = (event) => {
    setArtist(event.target.value);
  };

  const audioUpdateSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateAudio({
        id: audioId,
        title,
        artist,
      })
    );
    dispatch(addAudioToLocalStorage());
    history.push(`/`);
  };

  if (isLoading) {
    return (
      <div className="center" style={{ minHeight: "70vh" }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (loadedAudios.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find the audio!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {!isLoading && loadedAudios.length !== 0 && (
        <StyledPlaceForm onSubmit={audioUpdateSubmitHandler}>
          <Input
            id="title"
            type="text"
            element="input"
            label="title"
            onChange={titleChange}
          />
          <Input
            id="artist"
            element="input"
            label="artist"
            onChange={artistChange}
          />
          <Button type="submit">UPDATE AUDIO</Button>
        </StyledPlaceForm>
      )}
    </React.Fragment>
  );
};

export default UpdateAudio;
