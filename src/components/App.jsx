import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col justify-between p-8 bg-[oklch(var(--bg))] text-[oklch(var(--ink))] selection:bg-[oklch(var(--accent)/0.18)] selection:text-[oklch(var(--accent-ink))] antialiased">
      <MusicPlayer />
      <Footer />
    </div>
  );
}
export default App;