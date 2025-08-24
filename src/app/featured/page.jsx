import FeaturedCard from "../../components/ui/featured-card";
import { cookies } from "next/headers";
import "../sass/featured-page.scss";
import CommonHeader from "@/components/ui/common-header";
import AppNavigationBar from "@/components/ui/app-navigation-bar";


export default async function FeaturedPage() {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  if (!access_token) return <div>Log ind for at se featured albums</div>;

  const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: { Authorization: `Bearer ${access_token.value}` }
  });

  const data = await response.json();

  return (
    <>
     <CommonHeader transparent={true} />
    <div className="featured-container">
      {data.albums.items.map(album => (
        <FeaturedCard key={album.id} album={album} />
      ))}
    </div>
     <AppNavigationBar />
    </>
  );

  

 
}
