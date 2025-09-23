export default function CoverArt({ song, src, alt }) {
  const image =
    song?.cover ||
    src ||
    "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
          <defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
            <stop stop-color='#e5e7eb' offset='0'/><stop stop-color='#d1d5db' offset='1'/>
          </linearGradient></defs>
          <rect width='100%' height='100%' fill='url(#g)'/>
          <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                fill='#6b7280' font-size='28' font-family='sans-serif'>Cover Art</text>
        </svg>`
      );

  const altText = alt || (song?.title ? `${song.title} cover` : "Album cover");

  return (
    <img
      src={image}
      alt={altText}
      className="w-full aspect-square rounded-2xl object-cover shadow md:max-w-[45vh] md:mx-auto"
    />
  );
}