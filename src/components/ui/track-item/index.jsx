"use client";

import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import MarqueeText from "../marquee-text";
import { playerContext } from "@/providers/player-provider";
import { msToTime } from "@/utils/time";
import "../../../app/sass/track-item.scss";


export default function TrackItem({ track, albumCover }) {
  const { setShowPlayer, setCurrentTrack, setAlbumCover } = useContext(playerContext);

  function clickHandler() {
    setShowPlayer(true);
    setCurrentTrack(track);
    setAlbumCover(albumCover);
  }

  return (
    <button className="track-item-button" onClick={clickHandler}>
      <article className="track-item">
        <span className="play-icon">
          <FaPlay className="fa-play" />
        </span>
        <div className="track-info">
          <MarqueeText name={track.name} className="track-name" />
          <MarqueeText name={track.artists.map(a => a.name).join(", ")} className="track-artists" />
        </div>
        <span className="track-duration">{msToTime(track.duration_ms)}</span>
      </article>
    </button>
  );
}


