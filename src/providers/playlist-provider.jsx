"use client";
import { createContext, useState, useContext } from "react";

const PlaylistContext = createContext();

export function usePlaylist() {
  return useContext(PlaylistContext);
}

export default function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);

  return (
    <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
}
