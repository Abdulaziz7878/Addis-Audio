import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loadedAudios: JSON.parse(localStorage.getItem("audios")) || [],
};

const slice = createSlice({
  name: "audios",
  initialState,
  reducers: {
    getAudiosFetch(state) {
      state.isLoading = true;
    },
    getAudiosSuccess(state, action) {
      state.loadedAudios.push(...action.payload.track);
      state.isLoading = false;
    },
    getAudiosFail(state, action) {
      state.loadedAudios = action.payload;
      state.isLoading = false;
    },
    addNewAudio(state, action) {
      state.isLoading = true;
      state.loadedAudios.push(action.payload);
      state.isLoading = false;
    },
    updateAudio(state, action) {
      state.isLoading = true;
      const index = state.loadedAudios.findIndex(
        (audio) => audio.idTrack === action.payload.id
      );
      state.loadedAudios[index].strTrack = action.payload.title;
      state.loadedAudios[index].strArtist = action.payload.artist;
      state.isLoading = false;
    },
    deleteAudio(state, action) {
      state.isLoading = true;
      state.loadedAudios = state.loadedAudios.filter(
        (audio) => audio.idTrack !== action.payload
      );
      state.isLoading = false;
    },
    addAudioToLocalStorage(state) {
      localStorage.setItem("audios", JSON.stringify(state.loadedAudios));
    },
  },
});

export const {
  getAudiosFail,
  getAudiosFetch,
  getAudiosSuccess,
  addNewAudio,
  updateAudio,
  deleteAudio,
  addAudioToLocalStorage,
} = slice.actions;
export default slice.reducer;
