import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Take On Me",
      duration: "4:03",
    },
    {
      title: "Never Gonna Give You Up",
      duration: "3:33",
    },
    {
      title: "All Star",
      duration: "3:15",
    },
    {
      title: "Lithium Flower",
      duration: "3:22",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
