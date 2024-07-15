import { call, put, takeLatest } from "redux-saga/effects";
import { getAudiosSuccess } from "./AudiosReducer";
import { addAudioToLocalStorage } from "./AudiosReducer";

function* workGetAudiosFetch() {
  const audios = yield call(() =>
    fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888")
  );
  const formattedCats = yield audios.json();
  yield put(getAudiosSuccess(formattedCats));
  yield put(addAudioToLocalStorage());
}

function* AudiosSaga() {
  yield takeLatest("audios/getAudiosFetch", workGetAudiosFetch);
}

export default AudiosSaga;
