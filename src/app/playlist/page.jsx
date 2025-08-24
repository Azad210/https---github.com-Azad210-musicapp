import AppNavigationBar from "@/components/ui/app-navigation-bar";
import CommonHeader from "@/components/ui/common-header";
import PlaylistCarousel from "@/components/ui/playlist-carousel"; 
import PlaylistProvider from "@/providers/playlist-provider";
import { cookies } from "next/headers";
import "../sass/playlist.scss";


export default async function PlaylistsPage() {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: "Bearer " + access_token.value
    }
  });

  const data = await response.json();
  console.log("data", data);

  return (
    <>
      <CommonHeader transparent={true} />
      <main>
        <PlaylistProvider>
          <div className="playlist-header">
            <PlaylistCarousel playlists={data.items} />
          </div>
        </PlaylistProvider>
      </main>
      <AppNavigationBar />
    </>
  );
}
