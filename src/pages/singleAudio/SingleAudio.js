import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAudio } from "../../store/AudiosReducer";
import { useHistory } from "react-router-dom";

import { addAudioToLocalStorage } from "../../store/AudiosReducer";
import SingleAudioList from "../../coponents/singleAudioList/SingleAudioList";
import LoadingSpinner from "../../coponents/loadingSpinner/LoadingSpinner";

const SingleAudio = () => {
  const loadedAudios = useSelector((state) => state.loadedAudios);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const audioId = useParams().audioId;

  const audioDeleteHandler = () => {
    dispatch(deleteAudio(audioId));
    dispatch(addAudioToLocalStorage());
    history.push(`/`);
  };

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center" style={{ minHeight: "70vh" }}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (audioId === !audioId || loadedAudios) && (
        <SingleAudioList
          audioId={audioId}
          items={loadedAudios.filter((audio) => audio.idTrack === audioId)}
          onDeleteaudio={audioDeleteHandler}
        />
      )}
    </React.Fragment>
  );
};

export default SingleAudio;
