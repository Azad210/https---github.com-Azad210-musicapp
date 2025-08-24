import { cookies } from "next/headers";
import TrackItem from "@/components/ui/track-item";
import PlayerProvider from "@/providers/player-provider";
import "../../sass/album.scss";
import AppNavigationBar from "@/components/ui/app-navigation-bar";


export default async function AlbumDetailPage({ params }) {
  const { albumId } = params;
  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  if (!access_token) return <div>Log ind for at se albummet</div>;

  const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: { Authorization: `Bearer ${access_token.value}` }
  });

  const data = await response.json();

  return (
    <>
    <PlayerProvider>
      <div className="album-page">
        <div className="album-header">
          <img src={data.images[0]?.url || "/placeholder.png"} alt={data.name} />
          <span>{data.tracks.items.length} Songs</span>
        </div>
        <ul className="track-list">
          {data.tracks.items.map(track => (
            <li key={track.id}>
              <TrackItem track={track} albumCover={data.images[0]} />
            </li>
          ))}
        </ul>
      </div>
    </PlayerProvider>
         <AppNavigationBar />
    
    </>
  );

  
}
