export default function FeaturedCard({ album }) {
  const image = album.images?.[0] || { url: "https://via.placeholder.com/200", width: 200, height: 200 };

  return (
    <a href={`/album/${album.id}`} className="featured-card">
      <img src={image.url} width={image.width} height={image.height} alt={album.name} />
      <div className="overlay"></div>
      <div className="text">
        <h3>{album.name}</h3>
        <p>{album.album_type}</p>
      </div>
    </a>
  );
}
