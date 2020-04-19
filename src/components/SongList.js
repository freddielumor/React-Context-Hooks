import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Shine" },
    { id: 2, title: "In da club" },
    { id: 3, title: "We pray" },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return (
            <li key={song.id} id={song.id}>
              {song.title}
            </li>
          );
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;