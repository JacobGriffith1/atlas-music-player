type SongArt = {
  title: string;
  cover?: string | null;
};

type Props = {
  song?: SongArt | null;
  src?: string;
  alt?: string;
};

export default function CoverArt({ song, src, alt }: Props) {
  const image = song?.cover ?? src;
  const altText = alt ?? (song?.title ? `${song.title} cover` : "Album cover");

  // Themed placeholder when no image is available
  if (!image) {
    return (
      <svg
        viewBox="0 0 600 600"
        role="img"
        aria-label={altText}
        className="w-full aspect-square rounded-2xl md:max-w-[45vh] md:mx-auto shadow"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="var(--surface)" />
            <stop offset="1" stopColor="var(--paper)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
        <text
          x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
          fill="var(--subtle)" fontSize="28" fontFamily="ui-sans-serif, system-ui"
        >
          Cover Art
        </text>
      </svg>
    );
  }

  return (
    <img
      src={image}
      alt={altText}
      className="w-full aspect-square rounded-2xl object-cover shadow md:max-w-[45vh] md:mx-auto"
    />
  );
}
