import React, { useEffect } from "react";
import AudioList from "../../coponents/audioList/AudioList";
import LoadingSpinner from "../../coponents/loadingSpinner/LoadingSpinner";

import { useSelector, useDispatch } from "react-redux";
import { getAudiosFetch } from "../../store/AudiosReducer";
import { addAudioToLocalStorage } from "../../store/AudiosReducer";

const Audios = () => {
  const loadedAudios = useSelector((state) => state.loadedAudios);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedAudios.length === 0) {
      dispatch(getAudiosFetch());
      dispatch(addAudioToLocalStorage());
    }
  }, [dispatch, loadedAudios]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center" style={{ minHeight: "70vh" }}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedAudios && <AudioList items={loadedAudios} />}
    </React.Fragment>
  );
};

export default Audios;
